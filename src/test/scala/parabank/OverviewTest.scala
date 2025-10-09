package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

class OverviewTest extends Simulation {

  val httpConf = http.baseUrl(url)
    .acceptHeader("text/html")
    .check(status.is(200))

  val scn = scenario("Account Overview")
    .exec(
      http("View Overview")
        .get("/overview.htm")
        .check(status.is(200))
    )

  setUp(
    scn.inject(
      constantUsersPerSec(5).during(60.seconds)
    )
  ).protocols(httpConf)
}
