import jwt from 'jsonwebtoken';
import User from '../Models/User';
import UserRepository from '../Repository/UserRepository';
import { encryptPassword } from '../utils/encrypt';

class LoginService {

  async login(login, password) {
    const user = await User.findOne({
      where: { login },
      attributes: ['id', 'login', 'password', 'salt']
    }) || {};

    const passwordToCheck = encryptPassword(password, user.salt);
    if (passwordToCheck === user.password) {
      const token = jwt.sign({ id: user.id, login }, 'RESTFULAPIs');
      return {
        status: 'OK',
        msg: 'Logged successfully',
        token,
      };
    } else {
      return {
        status: 'ERROR',
        msg: 'Login or password incorrect.'
      }
    }
  }


  async register(user) {
    try {
      await UserRepository.addUser(user);

      return {
        status: 'OK',
        msg: 'User created successfully.'
      };
    } catch (error) {
      return {
        status: 'ERROR',
        msg: error
      }
    }
  }

}

export default new LoginService();
