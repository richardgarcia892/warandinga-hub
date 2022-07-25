import dotenv from 'dotenv';
dotenv.config();
console.log(`usiing enviroment: ${process.env.NODE_ENV}`);

const config = {
  env: process.env.NODE_ENV,
  appPort: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  saltRounds: process.env.SALT_ROUNDS,
};

export default config;
