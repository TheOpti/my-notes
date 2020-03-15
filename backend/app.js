import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { allowCors } from './middleware/cors';
import router from './routes';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use(allowCors);

app.use('/', router);

export default app;
