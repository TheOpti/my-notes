import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';

import { establishConnectionToDatabase } from './mongo';

// set up
const app = express();
dotenv.config();
app.use(morgan('combined'));
app.use(bodyParser.json());

// allow CORS
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Token');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

// start the app
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');

  establishConnectionToDatabase();
});
