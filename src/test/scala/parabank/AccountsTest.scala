package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

class AccountsTest extends Simulation {

  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    .check(status.is(200))

  val scn = scenario("View Customer Accounts")
    .exec(
      http("Get Customer Accounts")
        .get("/services/bank/customers/12212/accounts")
        .check(status.is(200))
    )

  setUp(
    scn.inject(
      nothingFor(5.seconds),
      atOnceUsers(50)
    )
  ).protocols(httpConf)
}