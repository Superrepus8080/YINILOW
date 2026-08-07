package com.yinilow.db;

import com.yinilow.config.AppConfig;
import org.flywaydb.core.Flyway;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class FlywayMigrator {
  private static final Logger log = LoggerFactory.getLogger(FlywayMigrator.class);

  public static void migrate(AppConfig config) {
    log.info("Running Flyway migrations against {}", config.databaseUrl());
    Flyway flyway = Flyway.configure()
      .dataSource(config.databaseUrl(), config.databaseUser(), config.databasePassword())
      .locations("classpath:db/migration")
      .load();
    var result = flyway.migrate();
    log.info("Flyway applied {} migration(s)", result.migrationsExecuted);
  }

  private FlywayMigrator() {}
}
