import User from '../Models/User';

const responsesMap = {
  register: {
    'true': {
      status: 'OK',
    },
    'false': {
      status: 'ERROR',
      msg: 'User already exists.'
    }
  }
};

class UserService {

  async register(user) {
    const result = await User.findCreateFind({
      where: {
        $or: [
          {login: user.login},
          {email: user.email}
        ]
      },
      defaults: user
    });

    return responsesMap.register[result[1]];
  }
}

export default new UserService();
