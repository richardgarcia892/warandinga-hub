import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import routerApi from './routes';
import middlewareApi from './middleware';

import './config/mongodb.config'; // Init the Database Config

const app = express();

// built in Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

routerApi(app);
middlewareApi(app);

app.listen(config.appPort, () => {
  console.log(`app running on port ${config.appPort}`);
});

export default app; // Export App for debugging
