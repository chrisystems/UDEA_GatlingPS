package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._

class LoginTest extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    //Verificar de forma general para todas las solicitudes
    .check(status.is(200))

  // 2 Scenario Definition
  val load_test100 = scenario("Login con 100 usuarios concurrentes").
    exec(http("login")
      .get(s"/login/$username/$password")
       //Recibir información de la cuenta
      .check(status.is(200))
    )

  val load_test200 = scenario("Login con 200 usuarios concurrentes").
    exec(http("login")
      .get(s"/login/$username/$password")
      .check(status.is(200))
    )

  // 3 Load Scenario
  setUp(
    load_test100.inject(atOnceUsers(100)).protocols(httpConf),
    load_test200.inject(atOnceUsers(200)).protocols(httpConf)
  ).assertions(
    global.responseTime.mean.lt(2000),
    global.responseTime.mean.lt(5000)
  )
}

