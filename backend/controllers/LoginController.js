import express from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../Services/UserService';

const api = express.Router();

class LoginController {

  login(req, res) {
    const { login, password } = req.body;

    return res.json({
      // todo add expiration date
      token: jwt.sign({login: login}, 'RESTFULAPIs')
    });
  }

  changePassword(req, res) {
    res.send('POST changepassword');
  }

  async register(req, res) {
    const { user } = req.body;

    const response = await UserService.register(user);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }
}

const ctrl = new LoginController();

api.post('/login', ctrl.login);
api.post('/changepassword', ctrl.changePassword);
api.post('/register', ctrl.register);

export default api;
