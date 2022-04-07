'use strict';
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const config = require('./config');
const middlewareApi = require('./middleware');
const routerApi = require('./routes');

require('./config/mongodb.config');
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
module.exports = app;
