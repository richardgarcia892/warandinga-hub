require('dotenv').config();

console.log(`usiing enviroment: ${process.env.NODE_ENV}`);

const config = {
  env: process.env.NODE_ENV,
  appPort: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

export default config;
