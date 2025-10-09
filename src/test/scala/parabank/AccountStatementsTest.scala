package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

class AccountStatementsTest extends Simulation {

  val httpConf = http
    .baseUrl(url) // <- viene de parabank.Data
    .acceptHeader("application/json")
    // Verificar estado 200 en todas las solicitudes
    .check(status.is(200))

  val scnAccountStatements = scenario("Account Statements Test - Carga Simultánea")
    .exec(
      // Primer paso: Login para autenticación
      http("Login Request")
        .get(s"/login/$username/$password")
        .check(status.is(200))
        .check(jsonPath("$.id").saveAs("customerId"))
    )
    .pause(1)
    .exec(
      // Segundo paso: Obtener lista de cuentas del usuario
      http("Get Accounts Request")
        .get("/customers/${customerId}/accounts")
        .check(status.is(200))
        .check(jsonPath("$[0].id").saveAs("accountId"))
    )
    .pause(1)
    .exec(
      // Tercer paso: Consultar estado de cuenta específico
      http("Get Account Statement Request")
        .get("/accounts/${accountId}/transactions")
        .check(status.is(200))
        .check(responseTimeInMillis.lte(3000)) // Tiempo de respuesta ≤ 3 segundos
    )

  val scnCargaSimultanea = scenario("Account Statements Test - 200 Usuarios Simultáneos")
    .exec(
      // Login
      http("Login Request")
        .get(s"/login/$username/$password")
        .check(status.is(200))
        .check(jsonPath("$.id").saveAs("customerId"))
    )
    .pause(500.milliseconds)
    .exec(
      // Obtener cuentas
      http("Get Accounts Request")
        .get("/customers/${customerId}/accounts")
        .check(status.is(200))
        .check(jsonPath("$[0].id").saveAs("accountId"))
    )
    .pause(500.milliseconds)
    .exec(
      // Consultar estado de cuenta (foco principal del test)
      http("Get Account Statement Request")
        .get("/accounts/${accountId}/transactions")
        .check(status.is(200))
        .check(responseTimeInMillis.lte(3000)) // Tiempo de respuesta ≤ 3 segundos
    )

  // Carga gradual: rampa de usuarios hasta llegar a 200 simultáneos
  val cargaGradual = scnAccountStatements.inject(
    rampUsers(50).during(10.seconds),   // 50 usuarios en 10s
    constantUsersPerSec(10).during(30.seconds) // 10 usuarios/s durante 30s
  )

  // Carga simultánea: 200 usuarios simultáneos
  val cargaSimultanea = scnCargaSimultanea.inject(
    rampUsers(200).during(30.seconds), // Rampa hasta 200 usuarios en 30s
    constantUsersPerSec(20).during(60.seconds) // Mantener carga durante 60s
  )

  // Plan de ejecución
  setUp(
    cargaGradual,
    cargaSimultanea
  ).protocols(httpConf)
   .assertions(
      // Historia de Usuario No Funcional 3: Criterios de aceptación
      
      // 1. Tiempo de respuesta ≤ 3 segundos con 200 usuarios simultáneos
      global.responseTime.mean.lte(3000),
      global.responseTime.percentile3.lte(3000), // 95% de las consultas ≤ 3s
      
      // 2. La tasa de error no debe superar el 1%
      global.failedRequests.percent.lte(1),
      
      // Criterios adicionales de calidad
      global.responseTime.max.lte(5000), // Tiempo máximo no exceder 5s
      global.successfulRequests.percent.gte(99) // Al menos 99% de éxito
   )
}
