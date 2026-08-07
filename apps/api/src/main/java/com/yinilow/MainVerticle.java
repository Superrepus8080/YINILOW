package com.yinilow;

import com.yinilow.config.AppConfig;
import com.yinilow.http.ApiRouter;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import io.vertx.core.http.HttpServerOptions;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.CorsHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MainVerticle extends AbstractVerticle {
  private static final Logger log = LoggerFactory.getLogger(MainVerticle.class);

  private final AppConfig config;

  public MainVerticle(AppConfig config) {
    this.config = config;
  }

  @Override
  public void start(Promise<Void> startPromise) {
    Router router = Router.router(vertx);

    router.route().handler(CorsHandler.create()
      .addRelativeOrigin(".*")
      .allowedMethod(io.vertx.core.http.HttpMethod.GET)
      .allowedMethod(io.vertx.core.http.HttpMethod.POST)
      .allowedMethod(io.vertx.core.http.HttpMethod.PUT)
      .allowedMethod(io.vertx.core.http.HttpMethod.PATCH)
      .allowedMethod(io.vertx.core.http.HttpMethod.DELETE)
      .allowedMethod(io.vertx.core.http.HttpMethod.OPTIONS)
      .allowedHeader("Content-Type")
      .allowedHeader("Authorization")
      .allowedHeader("Accept"));

    ApiRouter.mount(router, config);

    HttpServerOptions options = new HttpServerOptions()
      .setHost(config.httpHost())
      .setPort(config.httpPort());

    vertx.createHttpServer(options)
      .requestHandler(router)
      .listen()
      .onSuccess(server -> {
        log.info("Listening on http://{}:{}", config.httpHost(), server.actualPort());
        startPromise.complete();
      })
      .onFailure(startPromise::fail);
  }
}
