import jwt from 'jsonwebtoken';
import { REPSONSE_MESSAGES } from '../../constant';
import { encryptPassword } from '../../utils/encrypt';
import { User } from '../../models/user';

async function login(req, res) {
  const { login = '', password = '' } = req.body;

  if (login && password) {
    try {
      const user = await User.findOne({ login }, 'login password salt type').exec();

      if (!user) {
        return res
          .status(404)
          .send({ message: REPSONSE_MESSAGES.NO_USER_WITH_LOGIN });
      }

      const { salt, password: storedPassword, type } = user;
      const passwordToCheck = encryptPassword(password, salt);
      
      if (passwordToCheck !== storedPassword) {
        return res
          .status(404)
          .send({ message: REPSONSE_MESSAGES.LOGIN_PASS_INCORRECT });
      }

      const token = jwt.sign({ login, type }, 'RESTFULAPIs');
      return res
        .status(200)
        .send({ message: REPSONSE_MESSAGES.LOGIN_OK, token });
    } catch (error) {
      return res
        .status(400)
        .send({ message: REPSONSE_MESSAGES.LOGIN_PASS_INCORRECT });
    }
  }
}

export default login;
