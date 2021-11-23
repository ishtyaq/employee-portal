
#### Development
```shell
## Launches the registration backend on an embedded tomcat instance.
employee-backend$> ./mvnw -Dspring-boot.run.profiles=local spring-boot:run
```
*Employee backend docker instance can run as docker image
#### Build
|                 	|                       Command                       	        | Description                                                                 	        |
|:---------------:	|:---------------------------------------------------------:	|-------------------------------------------------------------------------------------	|
| build + docker    | employee-backend$> `./mvnw clean install`             	| Build the employee backend artifact and prepares a docker image with latest tag.  |


#### Run dokcer
```shell
# Run the docker .
employee-backend$>  docker run -p 8080:8080 employeeportal/employee-backend

