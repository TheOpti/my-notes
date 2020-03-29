import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import allowCors from './middleware/cors';
import router from './routes';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(allowCors);

app.use('/', router);

export default app;
