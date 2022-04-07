require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  appPort: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

module.exports = config;
