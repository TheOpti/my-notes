import express from 'express';
import login from './login';

const router = express.Router();

router.post('/login', login);

export default router;