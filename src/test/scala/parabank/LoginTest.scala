package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

class LoginTest extends Simulation {

  val httpConf = http
    .baseUrl(url) // <- viene de parabank.Data
    .acceptHeader("application/json")
    // Verificar estado 200 en todas las solicitudes
    .check(status.is(200))

  val scnNormal = scenario("Login Test - Carga Normal")
    .exec(
      http("Login Request")
        .get(s"/login/$username/$password") // <- usa variables de parabank.Data
        .check(status.is(200))
    )

  val scnPico = scenario("Login Test - Carga Pico")
    .exec(
      http("Login Request")
        .get(s"/login/$username/$password") // <- usa variables de parabank.Data
        .check(status.is(200))
    )

  // Carga normal (ramp-up de 5 a 15 usuarios/s durante 30s)
  val cargaNormal = scnNormal.inject(
    rampUsersPerSec(5).to(15).during(30)
  )

  // Carga pico (ramp-up de 10 a 25 usuarios/s durante 30s)
  val cargaPico = scnPico.inject(
    rampUsersPerSec(10).to(25).during(30)
  )

  // 🧪 Plan de ejecución
  setUp(
    cargaNormal,
    cargaPico
  ).protocols(httpConf)
   .assertions(
      // Tiempo medio ≤ 2s bajo carga normal
      global.responseTime.mean.lte(2000),
      // Tiempo máx ≤ 5s bajo carga pico
      global.responseTime.max.lte(5000),
      // Menos del 1% de errores
      global.failedRequests.percent.lte(1)
   )
}