import express from 'express';
import login from './login';
import register from './register';

const router = express.Router();

router.route('/login')
  .post(login);

router.route('/register')
  .post(register);

export default router;