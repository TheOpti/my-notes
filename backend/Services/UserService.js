import crypto from 'crypto';
import uuidv1 from 'uuid/v1';

import User from '../Models/User';

const md5sum = crypto.createHash('md5');
const sha256 = crypto.createHash('sha256');

class UserService {

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


  generateSalt() {
    return crypto
      .randomBytes(4)
      .toString('hex');
  }


  encryptPassword(password, salt) {
    const firstPart = md5sum
      .digest(password + salt)
      .toString('hex');

    return sha256
      .digest(firstPart + salt)
      .toString('hex');
  }

}

export default new UserService();
