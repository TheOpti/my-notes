import jwt from 'jsonwebtoken';
import { REPSONSE_MESSAGES } from '../../constant';
import { encryptPassword } from '../../utils/encrypt';
import { User } from '../../models/user';

function login(req, res) {
  const { login = '', password = '' } = req.body;

  if (login && password) {
    User.findOne({ login }, 'login password salt type', (err, user) => {
      if (err) {
        res
          .status(404)
          .send({ message: REPSONSE_MESSAGES.NO_USER_WITH_LOGIN });

        return;
      }

      const { salt, password: storedPassword, type } = user;
      const passwordToCheck = encryptPassword(password, salt);

      if (passwordToCheck === storedPassword) {
        const token = jwt.sign({ login, type }, 'RESTFULAPIs');
        res
          .status(200)
          .send({ message: REPSONSE_MESSAGES.LOGIN_OK, token });

        return;
      }
      
      res
        .status(404)
        .send({ message: REPSONSE_MESSAGES.LOGIN_PASS_INCORRECT });
    });
  } else {
    res
      .status(400)
      .send({ message: REPSONSE_MESSAGES.LOGIN_PASS_INCORRECT });
  }
}

export default login;
