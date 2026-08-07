# syntax=docker/dockerfile:1

FROM node:22-alpine AS web-build
WORKDIR /web
COPY apps/web/package.json apps/web/package-lock.json ./
RUN npm ci
COPY apps/web/ ./
# Empty at build time; browser uses same-origin /api when unset
ARG VITE_API_URL=
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM maven:3.9.9-eclipse-temurin-21 AS api-build
WORKDIR /api
COPY apps/api/pom.xml ./
RUN mvn -q -B dependency:go-offline
COPY apps/api/src ./src
COPY --from=web-build /web/dist ./src/main/resources/webroot
RUN mvn -q -B -DskipTests package

FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=api-build /api/target/yinilow-api-0.1.0-SNAPSHOT.jar /app/app.jar
ENV HTTP_HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080
CMD ["java", "-jar", "/app/app.jar"]
