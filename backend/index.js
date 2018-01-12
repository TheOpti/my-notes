import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import sequelize from './sequelize';

import LoginController from './controllers/LoginController';
import NotesController from './controllers/NotesController';

// set up
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

// controllers
app.use(LoginController);
app.use(NotesController);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
