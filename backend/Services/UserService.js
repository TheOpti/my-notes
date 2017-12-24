import crypto from 'crypto';
import uuidv1 from 'uuid/v1';
import jwt from 'jsonwebtoken';

import User from '../Models/User';

class UserService {

  async login(login, password) {
    const user = await User.findOne({
      where: { login },
      attributes: ['login', 'password', 'salt']
    });

    const passwordToCheck = this.encryptPassword(password, user.salt);
    if (passwordToCheck === user.password) {
      const token = jwt.sign({ login: login }, 'RESTFULAPIs');
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
    const foundUser = await User.findOne({
      where: {
        $or: [{ login: user.login }, { email: user.email }]
      }});

    if (foundUser) {
      return {
        status: 'ERROR',
        msg: 'User already exists.'
      }
    } else {
      const salt = this.generateSalt();
      const password = this.encryptPassword(user.password, salt);

      const created = User.create({
        id: uuidv1(),
        login: user.login,
        email: user.email,
        salt: salt,
        password: password,
        registration_date: Date.now(),
      });

      return {
        status: 'OK',
        msg: 'User created successfully.'
      };
    }
  }


  async changePassword(login, password) {
    const foundUser = await User.findOne({
      where: { login },
      attributes: ['id', 'login', 'password', 'salt']
    });

    if (foundUser) {
      const newPassword = this.encryptPassword(password, foundUser.salt);
      const isUpdated = await foundUser.updateAttributes({ password: newPassword });

      if (isUpdated) {
        return {
          status: 'OK',
          msg: 'Password changed.'
        };
      } else {
        return {
          status: 'ERROR',
          msg: 'Error during password change.'
        };
      }
    } else {
      return {
        status: 'ERROR',
        msg: 'Login or password incorrect.'
      }
    }
  }


  generateSalt() {
    return crypto
      .randomBytes(4)
      .toString('hex');
  }


  encryptPassword(password, salt) {
    return crypto
      .createHash('sha256')
      .update(password + salt)
      .digest('base64');
  }

}

export default new UserService();
