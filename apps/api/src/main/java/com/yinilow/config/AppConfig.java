package com.yinilow.config;

public record AppConfig(
  String httpHost,
  int httpPort,
  String databaseUrl,
  String databaseUser,
  String databasePassword,
  String redisUrl,
  String jwtSecret
) {
  public static AppConfig fromEnv() {
    return new AppConfig(
      env("HTTP_HOST", "0.0.0.0"),
      Integer.parseInt(env("PORT", "8080")),
      env("DATABASE_URL", "jdbc:postgresql://localhost:5432/yinilow"),
      env("DATABASE_USER", "yinilow"),
      env("DATABASE_PASSWORD", "yinilow"),
      env("REDIS_URL", "redis://localhost:6379"),
      env("JWT_SECRET", "yinilow-dev-secret-change-me")
    );
  }

  private static String env(String key, String fallback) {
    String value = System.getenv(key);
    return value == null || value.isBlank() ? fallback : value;
  }
}
