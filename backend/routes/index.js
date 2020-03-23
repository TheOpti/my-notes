import express from 'express';

import useAuthentication from '../middleware/authentication';

import login from './login';
import register from './register';
import me from './me';

const router = express.Router();

router.route('/login')
  .post(login);

router.route('/register')
  .post(register);

router.route('/me')
  .get(useAuthentication, me);

export default router;