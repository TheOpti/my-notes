import express from 'express';
import UserService from '../Services/UserService';

const api = express.Router();

class UserController {

  async getAllUserData(req, res) {
    const userId = req.decoded.id;

    const response = await UserService.getAllUserData(userId);
    const statusCode = response.status === 'OK' ? 200 : 400;

    res.status(statusCode);
    res.send(response);
  }

  async changePassword(req, res) {
    const {
      login = '',
      password = '',
      repeatedPassword = ''
    } = req.body;

    if (login && password && repeatedPassword && password === repeatedPassword) {
      const response = await UserService.changePassword(login, password);
      const statusCode = response.status === 'OK' ? 200 : 400;

      res.status(statusCode);
      res.send(response);
    } else {
      res.status(401);
      res.send();
    }
  }

}

const ctrl = new UserController();

api.get('/user', ctrl.getAllUserData);
api.post('/changepassword', ctrl.changePassword);

export default api;
