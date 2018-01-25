import User from '../Models/User';
import Tag from '../Models/Tag';
import Note from '../Models/Note';
import uuidv1 from 'uuid/v1';

import {
  generateSalt,
  encryptPassword
} from '../utils/encrypt';

class UserRepository {

  async addUser(user) {
    const foundUser = await User.findOne({
      where: {
        $or: [{ login: user.login }, { email: user.email }]
      }
    });

    if (foundUser) {
      throw "User already exists!";
    }

    const salt = generateSalt();
    const password = encryptPassword(user.password, salt);

    return await User.create({
      id: uuidv1(),
      login: user.login,
      email: user.email,
      salt: salt,
      password: password,
      registration_date: Date.now(),
    });
  }


  async getUserData(userId) {
    const user = await User.findOne({
      where: { id: userId },
      attributes: ['id', 'login', 'email'],
      include: [
        {
          model: Note,
          where: { deleted: false },
          include: [
            {
              model: Tag,
              attributes: ['id', 'name'],
              through: { attributes: [] }
            }
          ]
        },
        {
          model: Tag,
          where: { deleted: false },
          attributes: ['id', 'name']
        }
      ]
    });

    return user;
  }

  async changePassword(login, password) {
    const foundUser = await User.findOne({
      where: { login },
      attributes: ['id', 'login', 'password', 'salt']
    });

    if (!foundUser) {
      throw 'Could not find user with given login!'
    }

    const newPassword = encryptPassword(password, foundUser.salt);
    const isUpdated = await foundUser.updateAttributes({ password: newPassword });

    if (!isUpdated) {
      throw 'Error during password change.'
    }

    return 'Password changed';
  }

}

export default new UserRepository();
