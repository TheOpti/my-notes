import express from 'express';
import login from './login';
import register from './register';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

export default router;