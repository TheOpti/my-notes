
import express from 'express';
import jwt from 'jsonwebtoken';
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

  register(req, res) {
    res.send('POST register');
  }

}

const ctrl = new LoginController();

api.post('/login', ctrl.login);
api.post('/changepassword', ctrl.changePassword);
api.post('/register', ctrl.register);

export default api;
