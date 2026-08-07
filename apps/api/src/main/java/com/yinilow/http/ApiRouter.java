package com.yinilow.http;

import com.yinilow.config.AppConfig;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Map;

public final class ApiRouter {
  private static final Logger log = LoggerFactory.getLogger(ApiRouter.class);
  private static final String INDEX_HTML = loadClasspathText("webroot/index.html");
  private static final Map<String, String> CONTENT_TYPES = Map.of(
    "html", "text/html; charset=UTF-8",
    "js", "application/javascript; charset=UTF-8",
    "css", "text/css; charset=UTF-8",
    "svg", "image/svg+xml",
    "png", "image/png",
    "jpg", "image/jpeg",
    "jpeg", "image/jpeg",
    "webp", "image/webp",
    "ico", "image/x-icon",
    "map", "application/json"
  );

  public static void mount(Router router, AppConfig config) {
    router.get("/api/v1/health").handler(ctx -> health(ctx, config));

    // Serve packaged SPA assets from classpath webroot (Docker copies Vite dist here)
    // Exclude /api/* so future API routes are not swallowed by the SPA handler
    router.getWithRegex("^/(?!api/).*$").handler(ApiRouter::serveSpaOrAsset);
  }

  private static void serveSpaOrAsset(RoutingContext ctx) {
    String path = ctx.normalizedPath();
    if (path == null || path.isBlank() || "/".equals(path)) {
      sendIndex(ctx);
      return;
    }

    // Prevent path traversal
    String relative = path.startsWith("/") ? path.substring(1) : path;
    if (relative.contains("..")) {
      ctx.fail(400);
      return;
    }

    String resourcePath = "webroot/" + relative;
    byte[] bytes = loadClasspathBytes(resourcePath);
    if (bytes != null) {
      ctx.response()
        .putHeader("Content-Type", contentTypeFor(relative))
        .putHeader("Cache-Control", relative.startsWith("assets/") ? "public, max-age=31536000, immutable" : "no-cache")
        .end(Buffer.buffer(bytes));
      return;
    }

    // Client-side routes ( /fashion , /home , … )
    if (!relative.contains(".")) {
      sendIndex(ctx);
      return;
    }

    ctx.response().setStatusCode(404).end("Not found");
  }

  private static void sendIndex(RoutingContext ctx) {
    if (INDEX_HTML == null) {
      ctx.response()
        .setStatusCode(503)
        .putHeader("Content-Type", "text/plain")
        .end("Web UI not packaged. Build with Docker or copy apps/web/dist into webroot.");
      return;
    }
    ctx.response()
      .putHeader("Content-Type", "text/html; charset=UTF-8")
      .putHeader("Cache-Control", "no-cache")
      .end(INDEX_HTML);
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

  private static String contentTypeFor(String path) {
    int dot = path.lastIndexOf('.');
    if (dot < 0) {
      return "application/octet-stream";
    }
    String ext = path.substring(dot + 1).toLowerCase();
    return CONTENT_TYPES.getOrDefault(ext, "application/octet-stream");
  }

  private static String loadClasspathText(String resource) {
    byte[] bytes = loadClasspathBytes(resource);
    return bytes == null ? null : new String(bytes, StandardCharsets.UTF_8);
  }

  private static byte[] loadClasspathBytes(String resource) {
    try (InputStream in = ApiRouter.class.getClassLoader().getResourceAsStream(resource)) {
      if (in == null) {
        return null;
      }
      return in.readAllBytes();
    } catch (Exception e) {
      log.warn("Failed reading classpath resource {}", resource, e);
      return null;
    }
  }

  private ApiRouter() {}
}
