package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

class TransferTest extends Simulation {

  val httpConf = http
    .baseUrl(url) // <- viene de parabank.Data
    .acceptHeader("application/json")
    // Verificar estado 200 en todas las solicitudes
    .check(status.is(200))

  // Feeder CSV para datos de transferencias
  val transferFeeder = csv("transfers.csv").circular

  val scnNormal = scenario("Transfer Test - Carga Normal")
    .feed(transferFeeder)
    .exec(
      http("Transfer Request")
        .post("/transfer/${fromAccountId}/${toAccountId}/${amount}") // <- usa variables del CSV
        .check(status.is(200))
    )

  val scnEstrés = scenario("Transfer Test - Prueba de Estrés")
    .feed(transferFeeder)
    .exec(
      http("Transfer Request")
        .post("/transfer/${fromAccountId}/${toAccountId}/${amount}") // <- usa variables del CSV
        .check(status.is(200))
    )

  // Carga normal (ramp-up de 10 a 50 usuarios/s durante 30s)
  val cargaNormal = scnNormal.inject(
    rampUsersPerSec(10).to(50).during(30)
  )

  // Prueba de estrés (ramp-up de 50 a 150 transacciones/s durante 60s)
  val cargaEstrés = scnEstrés.inject(
    rampUsersPerSec(50).to(150).during(60)
  )

  // Plan de ejecución
  setUp(
    cargaNormal,
    cargaEstrés
  ).protocols(httpConf)
   .assertions(
      // El sistema debe manejar al menos 150 transacciones por segundo
      global.requestsPerSec.gte(150),
      // Tiempo medio ≤ 3s para transferencias
      global.responseTime.mean.lte(3000),
      // Tiempo máx ≤ 8s bajo carga de estrés
      global.responseTime.max.lte(8000),
      // No deben perderse transacciones - 0% de errores
      global.failedRequests.percent.lte(0),
      // Percentil 95 ≤ 5s
      global.responseTime.percentile3.lte(5000)
   )
}