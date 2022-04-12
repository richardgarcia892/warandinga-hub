const mongoose = require('mongoose');
const config = require('./index');

const HOST = config.dbHost;
const USER = config.dbUser;
const PASS = config.dbPass;
const DBNAME = config.dbName;
console.log({ env: process.env.NODE_ENV, HOST, USER, PASS, DBNAME });

const URI = `mongodb+srv://${USER}:${PASS}@${HOST}/${DBNAME}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`connect to: ${HOST}, with user ${USER}`);
    }
  }
);

const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));