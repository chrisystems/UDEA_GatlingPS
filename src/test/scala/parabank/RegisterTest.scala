package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

class RegisterTest extends Simulation {

  val httpConf = http.baseUrl(url)
    .acceptHeader("text/html")
    .check(status.is(200))

  val scn = scenario("Register New User")
    .exec(
      http("Open Register Page")
        .get("/register.htm")
        .check(status.is(200))
    )
    .pause(1)
    .exec(
      http("Submit Registration")
        .post("/register.htm")
        .formParam("customer.firstName", "Test")
        .formParam("customer.lastName", "User")
        .formParam("customer.address.street", "123 Main St")
        .formParam("customer.address.city", "Medellin")
        .formParam("customer.address.state", "Antioquia")
        .formParam("customer.address.zipCode", "050001")
        .formParam("customer.phoneNumber", "3000000000")
        .formParam("customer.ssn", "123-45-6789")
        .formParam("customer.username", "testuser")
        .formParam("customer.password", "password")
        .formParam("repeatedPassword", "password")
        .check(status.is(200))
    )

  setUp(
    scn.inject(
      atOnceUsers(10)
    )
  ).protocols(httpConf)
}
