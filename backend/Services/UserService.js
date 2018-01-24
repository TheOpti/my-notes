import UserRepository from '../Repository/UserRepository';

class UserService {

  async getAllUserData(userId) {
    try {
      const user = await UserRepository.getUserData(userId);

      return { status: 'OK', user };
    } catch (error) {
      return { status: 'ERROR', error };
    }
  }


  async changePassword(login, password) {
    try {
      const msg = UserRepository.changePassword(login, password);

      return { status: 'OK', msg }
    } catch (error) {
      return { status: 'ERROR',  msg: error }
    }
  }

}

export default new UserService();
