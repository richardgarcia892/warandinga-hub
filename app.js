import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import middlewareApi from './middleware';
import routerApi from './routes';

import './config/mongodb.config';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

routerApi(app);
middlewareApi(app);

app.listen(config.appPort, () => {
  console.log(`app running on port ${config.appPort}`);
});
export default app;
