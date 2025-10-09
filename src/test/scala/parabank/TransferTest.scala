package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

class TransferTest extends Simulation {

  val httpConf = http.baseUrl(url)
    .acceptHeader("text/html")
    .check(status.is(200))

  val scn = scenario("Transfer Funds")
    .exec(
      http("Transfer Request")
        .post("/transfer.htm")
        .formParam("fromAccountId", "13344")
        .formParam("toAccountId", "13345")
        .formParam("amount", "50")
        .check(status.is(200))
    )

  setUp(
    scn.inject(
      rampUsersPerSec(1).to(10).during(30.seconds)
    )
  ).protocols(httpConf)
}
