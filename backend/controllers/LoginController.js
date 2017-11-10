
import express from 'express';

const api = express.Router();

class LoginController {

  login(req, res) {
    res.send('POST login');
  }

  changePassword(req, res) {
    res.send('POST changepassword');
  }

  register(req, res) {
    res.send('POST register');
  }

}

const ctrl = new LoginController();

api.post('/login', ctrl.login);
api.post('/changepassword', ctrl.changePassword);
api.post('/register', ctrl.register);

export default api;
