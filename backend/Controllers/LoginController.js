import express from 'express';
import LoginService from '../Services/LoginService';

const api = express.Router();

class LoginController {

  async login(req, res) {
    const {
      login = '',
      password = ''
    } = req.body;

    if (login && password) {
      const response = await LoginService.login(login, password);
      const statusCode = response.status === 'OK' ? 200 : 400;

      res.status(statusCode);
      res.send(response);
    } else {
      res.status(401);
      res.send();
    }
  }


  async register(req, res) {
    const user = req.body.user;
    const isUserFieldsCorrect = this.validateFieldsForRegistration(user);

    if (isUserFieldsCorrect) {
      const response = await LoginService.register(user);
      const statusCode = response.status === 'OK' ? 200 : 400;

      res.status(statusCode);
      res.send(response);
    } else {
      res.status(400);
      res.send();
    }
  }


  validateFieldsForRegistration(user) {
    return user && user.login && user.password
      && user.repeatedPassword && user.email
      && (user.password === user.repeatedPassword);
  }

}

const ctrl = new LoginController();

api.post('/login', ctrl.login);
api.post('/register', ctrl.register.bind(ctrl));

export default api;
