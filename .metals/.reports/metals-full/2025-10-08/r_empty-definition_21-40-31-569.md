error id: file:///C:/Users/ASUS/Desktop/Pruebas%20de%20software%20%5BElectiva%20LINEA%20ENFASÍS%20IN%20DE%20SOF%20Y%20SIS%20DE%20IN%5D/Entregas/Practica%204/UDEA_GatlingPS/src/test/scala/parabank/LoginTest.scala:`<none>`.
file:///C:/Users/ASUS/Desktop/Pruebas%20de%20software%20%5BElectiva%20LINEA%20ENFASÍS%20IN%20DE%20SOF%20Y%20SIS%20DE%20IN%5D/Entregas/Practica%204/UDEA_GatlingPS/src/test/scala/parabank/LoginTest.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -io/gatling/core/Predef.setUp.
	 -io/gatling/core/Predef.setUp#
	 -io/gatling/core/Predef.setUp().
	 -io/gatling/http/Predef.setUp.
	 -io/gatling/http/Predef.setUp#
	 -io/gatling/http/Predef.setUp().
	 -parabank/Data.setUp.
	 -parabank/Data.setUp#
	 -parabank/Data.setUp().
	 -setUp.
	 -setUp#
	 -setUp().
	 -scala/Predef.setUp.
	 -scala/Predef.setUp#
	 -scala/Predef.setUp().
offset: 568
uri: file:///C:/Users/ASUS/Desktop/Pruebas%20de%20software%20%5BElectiva%20LINEA%20ENFASÍS%20IN%20DE%20SOF%20Y%20SIS%20DE%20IN%5D/Entregas/Practica%204/UDEA_GatlingPS/src/test/scala/parabank/LoginTest.scala
text:
```scala
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
  val scn = scenario("Login").
    exec(http("login")
      .get(s"/login/$username/$password")
       //Recibir información de la cuenta
      .check(status.is(200))
    )

  // 3 Load Scenario
  @@setUp(
    scn.inject(rampUsersPerSec(5).to(15).during(30))
  ).protocols(httpConf);
}
```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.