import User from '../Models/User';
import Tag from '../Models/Tag';
import Note from '../Models/Note';

class UserService {

  async getAllUserData(userId) {
    const user = await User.findOne({
      where: { id: userId },
      attributes: ['id', 'login', 'email'],
      include: [
        {
          model: Note,
          include: [
            {
              model: Tag,
              where: { deleted: false },
              attributes: ['id', 'name'],
              through: {attributes: []}
            }
          ]
        },
        {
          model: Tag,
          attributes: ['id', 'name']
        }
      ]
    });

    return { status: 'OK', user };
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

}

export default new UserService();
