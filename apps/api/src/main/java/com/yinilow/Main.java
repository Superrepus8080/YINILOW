package com.yinilow;

import com.yinilow.config.AppConfig;
import com.yinilow.db.FlywayMigrator;
import io.vertx.core.Vertx;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class Main {
  private static final Logger log = LoggerFactory.getLogger(Main.class);

  public static void main(String[] args) {
    AppConfig config = AppConfig.fromEnv();

    boolean skipMigrations = "true".equalsIgnoreCase(System.getenv().getOrDefault("SKIP_MIGRATIONS", "false"));
    if (skipMigrations) {
      log.warn("SKIP_MIGRATIONS=true — starting without Flyway");
    } else {
      FlywayMigrator.migrate(config);
    }

    Vertx vertx = Vertx.vertx();
    vertx.deployVerticle(new MainVerticle(config))
      .onSuccess(id -> log.info("YINILOW API deployed: {}", id))
      .onFailure(err -> {
        log.error("Failed to deploy API", err);
        vertx.close();
        System.exit(1);
      });
  }

  private Main() {}
}
