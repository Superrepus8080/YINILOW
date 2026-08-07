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
    String rawUrl = env("DATABASE_URL", "jdbc:postgresql://localhost:5432/yinilow");
    String user = env("DATABASE_USER", "yinilow");
    String password = env("DATABASE_PASSWORD", "yinilow");
    DatabaseParts parts = normalizeDatabase(rawUrl, user, password);

    return new AppConfig(
      env("HTTP_HOST", "0.0.0.0"),
      Integer.parseInt(env("PORT", "8080")),
      parts.jdbcUrl(),
      parts.user(),
      parts.password(),
      env("REDIS_URL", "redis://localhost:6379"),
      env("JWT_SECRET", "yinilow-dev-secret-change-me")
    );
  }

  private static String env(String key, String fallback) {
    String value = System.getenv(key);
    return value == null || value.isBlank() ? fallback : value;
  }

  /**
   * Render provides postgres:// URLs; Flyway/JDBC need jdbc:postgresql://.
   * Credentials may be embedded in the URL or supplied separately.
   */
  static DatabaseParts normalizeDatabase(String rawUrl, String user, String password) {
    String url = rawUrl.trim();
    if (url.startsWith("postgres://") || url.startsWith("postgresql://")) {
      url = "jdbc:postgresql://" + url.substring(url.indexOf("://") + 3);
    }
    if (!url.startsWith("jdbc:")) {
      url = "jdbc:postgresql://" + url;
    }

    String resolvedUser = user;
    String resolvedPassword = password;
    String withoutPrefix = url.substring("jdbc:postgresql://".length());
    if (withoutPrefix.contains("@")) {
      String userInfo = withoutPrefix.substring(0, withoutPrefix.indexOf('@'));
      String hostPart = withoutPrefix.substring(withoutPrefix.indexOf('@') + 1);
      url = "jdbc:postgresql://" + hostPart;
      int colon = userInfo.indexOf(':');
      if (colon >= 0) {
        resolvedUser = userInfo.substring(0, colon);
        resolvedPassword = userInfo.substring(colon + 1);
      } else if (!userInfo.isBlank()) {
        resolvedUser = userInfo;
      }
    }

    return new DatabaseParts(url, resolvedUser, resolvedPassword);
  }

  record DatabaseParts(String jdbcUrl, String user, String password) {}
}
