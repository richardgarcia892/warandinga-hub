import mongoose from 'mongoose';
import config from './index';

const { connect, connection } = mongoose;

const HOST = config.dbHost;
const USER = config.dbUser;
const PASS = config.dbPass;
const DBNAME = config.dbName;
const DBPORT = config.dbPort;

console.log({
  env: process.env.NODE_ENV,
  HOST,
  USER,
  PASS,
  DBNAME,
  DBPORT,
});

const URI = `mongodb://${USER}:${PASS}@${HOST}:${DBPORT}/${DBNAME}?authSource=admin`;

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to MongoDB
connect(URI, connectionOptions, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`connect to: ${HOST}, with user ${USER}`);
  }
});

const db = connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
