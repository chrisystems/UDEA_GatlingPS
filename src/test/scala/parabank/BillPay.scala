package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._

class BillPay extends Simulation {

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //Verificar de forma general para todas las solicitudes
    .check(status.is(200))

  // 2 Scenario Definition
  val scn = scenario("Pago de servicios con concurrencia alta")
    .exec(
      http("Pay Bill")
        .post(s"/billpay?accountId=$fromAccountId&amount=$amountBill")
        .body(StringBody(
          s"""{
            "name": "$name",
            "address": {
              "street": "$street",
              "city": "$city",
              "state": "$state",
              "zipCode": "$zipCode"
            },
            "phoneNumber": "$phoneNumber",
            "accountNumber": $fromAccountId
          }"""
        )).asJson
        .check(status.is(200)) // Espera respuesta 200
    )

  // 3 Load Scenario
  setUp(
    scn.inject(atOnceUsers(200)) // inyecta 200 usuarios simultáneamente
  ).protocols(httpConf)
    .assertions(
      global.responseTime.max.lte(3000), // Tiempo máximo de respuesta ≤ 3s
      global.failedRequests.percent.lte(1.0) // Tasa de fallos ≤ 1%
    )

}