import jwt from 'jsonwebtoken';
import { encryptPassword } from '../../utils/encrypt';
import { User } from '../../models/user';

function login(req, res) {
  const { login = '', password = '' } = req.body;

  if (login && password) {
    User.findOne({ login }, 'login password salt type', (err, user) => {
      if (err) {
        res
          .status(404)
          .send({ message: 'There is no user with given login' });

        return;
      }

      const { salt, password: storedPassword, type } = user;
      const passwordToCheck = encryptPassword(password, salt);

      if (passwordToCheck === storedPassword) {
        const token = jwt.sign({ login, type }, 'RESTFULAPIs');
        res
          .status(200)
          .send({ message: 'Logged successfully', token });

        return;
      }
      
      res
        .status(404)
        .send({ message: 'Incorrect login or password' });
    });
  } else {
    res
      .status(401)
      .send();
  }
}

export default login;
