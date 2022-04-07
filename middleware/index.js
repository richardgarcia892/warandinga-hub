'use strict';
const errorHandlerMiddleware = require('./error.handler');

function middlewareApi(app) {
  app.use(errorHandlerMiddleware.logErrors);
  app.use(errorHandlerMiddleware.errorHandler);
  app.use(errorHandlerMiddleware.boomErrorHandler);
}

module.exports = middlewareApi;
