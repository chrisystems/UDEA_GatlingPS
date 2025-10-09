package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import parabank.Data._

class TransferTest extends Simulation {

  // 1️ Configuración HTTP: usa la base URL del archivo Data.scala
  val httpConf = http
    .baseUrl(url) // la variable 'url' viene de parabank.Data._
    .acceptHeader("application/json")
    .check(status.is(200))

  // 2️ Feeder CSV (en src/test/resources)
  val feeder = csv("transfer_feeder.csv").circular
  

  // 3️ Escenario: cada usuario virtual toma una fila y realiza un POST /transfer
  val scn = scenario("Transferencias simultaneas")
    .feed(feeder)
    .exec(
      http("Transferencia")
        .post("/transfer")
        .queryParam("fromAccountId", "${fromAccountId}")
        .queryParam("toAccountId", "${toAccountId}")
        .queryParam("amount", "${amount}")
        .check(status.is(200))
    )

  // 4 Inyección: simula una tasa de llegada constante (~150 transacciones/seg)
  setUp(
    scn.inject(
      constantUsersPerSec(150).during(60.seconds).randomized
    )
  ).protocols(httpConf)
    .assertions(
      global.requestsPerSec.gte(150),            // al menos 150 req/s
      global.successfulRequests.percent.gte(98), // 98% éxito mínimo
      global.failedRequests.percent.lte(2.0)     // no más del 2% errores
    )
}