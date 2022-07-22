import Router from 'express';
import userRouter from './users.router';

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
}

export default routerApi;
