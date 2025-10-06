package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import java.time.Instant
import java.util.concurrent.ThreadLocalRandom
import parabank.Data._

class HistorySimulation extends Simulation {

  val httpConf = http
    .baseUrl(url)
    .acceptHeader("application/json")
    .userAgentHeader("Gatling-Perf-Lab")

  val accountsFeeder = Iterator.continually {
    val acct = accounts(ThreadLocalRandom.current().nextInt(accounts.length))
    Map(
      "accountId" -> acct,
      "cb" -> Instant.now.toEpochMilli.toString
    )
  }

  val scn = scenario("AccountHistory")
    .exec(
      http("login")
        .get(s"/login/$username/$password")
        .check(status.is(200))
    ).exitHereIfFailed
    .pause(1)
    .feed(accountsFeeder)
    .exec(
      http("GetAccountHistory")
        .get("/accounts/${accountId}/transactions?cb=${cb}")
        .check(status.is(200))
        .check(jsonPath("$[0].id").optional.saveAs("firstTxnId"))
    )
    .pause(1)

  setUp(
    scn.inject(
      rampConcurrentUsers(0) to 200 during (120.seconds), 
      constantConcurrentUsers(200) during (5.minutes)
    ).protocols(httpConf)
  ).assertions(
    details("GetAccountHistory").responseTime.percentile(95).lte(3000),
    global.failedRequests.percent.lte(1)
  )
}
