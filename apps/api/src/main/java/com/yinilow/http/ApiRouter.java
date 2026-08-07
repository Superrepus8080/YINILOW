package com.yinilow.http;

import com.yinilow.config.AppConfig;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.StaticHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.time.Instant;

public final class ApiRouter {
  private static final Logger log = LoggerFactory.getLogger(ApiRouter.class);
  private static final String INDEX_HTML = loadIndexHtml();

  public static void mount(Router router, AppConfig config) {
    router.get("/api/v1/health").handler(ctx -> health(ctx, config));

    StaticHandler assets = StaticHandler.create("webroot")
      .setCachingEnabled(true)
      .setDefaultContentEncoding("UTF-8")
      .setIncludeHidden(false);

    router.get("/assets/*").handler(assets);
    router.get("/favicon.svg").handler(assets);
    router.get("/icons.svg").handler(assets);

    router.getWithRegex("^/(?!api/).*$").handler(ctx -> {
      if (INDEX_HTML == null) {
        ctx.response()
          .setStatusCode(503)
          .putHeader("Content-Type", "text/plain")
          .end("Web UI not packaged. Build with Docker or copy apps/web/dist into webroot.");
        return;
      }
      ctx.response()
        .putHeader("Content-Type", "text/html; charset=UTF-8")
        .end(INDEX_HTML);
    });
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

  private static String loadIndexHtml() {
    try (InputStream in = ApiRouter.class.getClassLoader().getResourceAsStream("webroot/index.html")) {
      if (in == null) {
        return null;
      }
      return new String(in.readAllBytes(), StandardCharsets.UTF_8);
    } catch (Exception e) {
      log.warn("Could not load webroot/index.html", e);
      return null;
    }
  }

  private ApiRouter() {}
}
