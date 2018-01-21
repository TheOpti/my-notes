import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import sequelize from './sequelize';

import LoginController from './Controllers/LoginController';
import UserController from './Controllers/UserController';
import NotesController from './Controllers/NotesController';
import TagsController from './Controllers/TagsController';

import initAllRelations from './init-relations';

// set up
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

// allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// establish connection to DB
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    // create relations and tables
    initAllRelations();
    sequelize.sync({force: false});
  })
  .catch(err => console.error('Unable to connect to the database:', err));

// use Controllers
app.use(LoginController);
app.use(UserController);
app.use(NotesController);
app.use(TagsController);

// start the app
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
