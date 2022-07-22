import { logErrors, boomErrorHandler, errorHandler } from './error.handler';

function middlewareApi(app) {
  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
}

export default middlewareApi;
