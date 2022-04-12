const errorMiddleware = require('./error.handler');

function middlewareApi(app) {
  app.use(errorMiddleware.logErrors);
  app.use(errorMiddleware.boomErrorHandler);
  app.use(errorMiddleware.errorHandler);
}

module.exports = middlewareApi;
