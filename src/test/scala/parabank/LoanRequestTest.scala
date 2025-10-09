package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

class LoanRequestTest extends Simulation {

  val httpConf = http
    .baseUrl(url) // <- viene de parabank.Data
    .acceptHeader("application/json")

  val scnLoanRequest = scenario("Loan Request Test - Solicitud de Préstamo bajo Carga")
    .exec(
      // Primero realizar login para autenticación y obtener customerId
      http("Login Request")
        .get(s"/login/$username/$password")
        .check(status.saveAs("loginStatus"))
        .check(bodyString.saveAs("loginResponse"))
        .check(status.is(200))
        .check(jsonPath("$.id").saveAs("customerId"))
    )
    .exec { session =>
      val status = session("loginStatus").asOption[Int].getOrElse("UNKNOWN")
      val response = session("loginResponse").asOption[String].getOrElse("NO_RESPONSE")
      val customerId = session("customerId").asOption[String].getOrElse("NO_CUSTOMER_ID")
      
      println(s"DEBUG - Login status: $status")
      println(s"DEBUG - Login response: $response")
      println(s"DEBUG - Customer ID captured: $customerId")
      
      session
    }
    .pause(1)
    .exec(
      // Solicitar préstamo con datos simulados
      http("Loan Request")
        .post("/requestLoan")
        .formParam("customerId", "${customerId}")
        .formParam("amount", "10000") // Monto del préstamo
        .formParam("downPayment", "1000") // Pago inicial
        .formParam("fromAccountId", "13344") // Cuenta de origen (usando una del CSV de transfers)
        .check(status.in(200, 201)) // Aceptar tanto 200 como 201 para creación
    )

  // Carga de 150 usuarios concurrentes según requerimientos
  val cargaConcurrente = scnLoanRequest.inject(
    // Ramp-up gradual a 150 usuarios en 30 segundos
    rampUsers(150).during(30.seconds),
    // Mantener 150 usuarios concurrentes durante 60 segundos
    constantUsersPerSec(150).during(60.seconds)
  )

  // Plan de ejecución
  setUp(
    cargaConcurrente
  ).protocols(httpConf)
   .assertions(
      // Tiempo de respuesta promedio ≤ 5 segundos (según criterio de aceptación)
      global.responseTime.mean.lte(5000),
      // Tiempo máximo ≤ 10 segundos para casos extremos
      global.responseTime.max.lte(10000),
      // Tasa de éxito ≥ 98% (según criterio de aceptación)
      global.successfulRequests.percent.gte(98),
      // Tasa de errores ≤ 2% (complemento del 98% de éxito)
      global.failedRequests.percent.lte(2)
   )
}
