'use strict';
const errorHandlerMiddleware = require('./error.handler');

function middlewareApi(app) {
  app.use(errorHandlerMiddleware.logErrors);
  app.use(errorHandlerMiddleware.boomErrorHandler);
  app.use(errorHandlerMiddleware.errorHandler);
}

module.exports = middlewareApi;
