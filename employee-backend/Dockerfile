FROM openjdk:8-jdk-alpine
MAINTAINER Ishtiaq
ENTRYPOINT ["/usr/bin/java", "-jar", "/usr/share/employeebackend/employeebackend.jar"]
EXPOSE 8080
# Add the service itself
ARG JAR_FILE
ADD target/${JAR_FILE} /usr/share/employeebackend/employeebackend.jar
