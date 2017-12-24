import express from 'express';
import UserService from '../Services/UserService';

const api = express.Router();

class LoginController {

  async login(req, res) {
    const {
      login = "",
      password = ""
    } = req.body;

    if (login && password) {
      const response = await UserService.login(login, password);
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
    const isUserFieldsCorrect = this.validateFieldsForRegistration.bind(this, user);

    if (isUserFieldsCorrect) {
      const response = await UserService.register(user);
      const statusCode = response.status === 'OK' ? 200 : 400;

      res.status(statusCode);
      res.send(response);
    } else {
      res.status(401);
      res.send();
    }
  }


  changePassword(req, res) {
    res.send('POST changepassword');
  }


  validateFieldsForRegistration(user) {
    return user.login && user.password &&
      user.repeatedPassword && user.email
      && (user.password === user.repeatedPassword);
  }

}

const ctrl = new LoginController();

api.post('/login', ctrl.login);
api.post('/changepassword', ctrl.changePassword);
api.post('/register', ctrl.register.bind(ctrl));

export default api;
