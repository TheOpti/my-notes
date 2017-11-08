import express from 'express';
import morgan from 'morgan';

import TestController from './controllers/TestController';

const app = express();

app.use(morgan('combined'));
app.use(TestController);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
