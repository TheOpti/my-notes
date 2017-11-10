import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import TestController from './controllers/TestController';
import LoginController from './controllers/LoginController';
import NotesController from './controllers/NotesController';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use(TestController);
app.use(LoginController);
app.use(NotesController);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
