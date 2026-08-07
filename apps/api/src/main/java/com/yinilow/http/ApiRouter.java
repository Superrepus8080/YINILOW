package com.yinilow.http;

import com.yinilow.config.AppConfig;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;

import java.time.Instant;

public final class ApiRouter {
  public static void mount(Router router, AppConfig config) {
    router.get("/api/v1/health").handler(ctx -> health(ctx, config));
  }

  private static void health(RoutingContext ctx, AppConfig config) {
    JsonObject body = new JsonObject()
      .put("status", "ok")
      .put("service", "yinilow-api")
      .put("timestamp", Instant.now().toString())
      .put("redisConfigured", config.redisUrl() != null && !config.redisUrl().isBlank());

    ctx.response()
      .putHeader("Content-Type", "application/json")
      .end(body.encode());
  }

  private ApiRouter() {}
}
