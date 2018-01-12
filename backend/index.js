import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import sequelize from './sequelize';

import LoginController from './Controllers/LoginController';
import NotesController from './Controllers/NotesController';

import initAllRelations from './init-relations';

// set up
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

// establish connection to DB
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

// create relations
initAllRelations();

// create tables
sequelize.sync({force: true});

// use controllers
app.use(LoginController);
app.use(NotesController);

// start the app
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
