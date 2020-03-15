import { encryptPassword, generateSalt } from '../../utils/encrypt';
import { USER_TYPES } from '../../constant';
import { User } from '../../models/user';

function register(req, res) {
  const { login, email, password, repeatedPassword } = req.body;

  if (login && email && password && repeatedPassword && password === repeatedPassword) {
    User.findOne({ $or: [{ login }, { email }] }, 'login', (err, user) => {
      if (err) {
        res
          .status(500)
          .send({ message: 'There was an error during request. Please, try again later.' });
      }

      if (user) {
        res
          .status(400)
          .send({ message: 'User already exists. You have to select another email or login.' });

        return;
      }

      const salt = generateSalt();
      const encryptedPassword = encryptPassword(password, salt);

      const newUser = {
        login,
        password: encryptedPassword,
        salt,
        email,
        type: USER_TYPES.USER,
      };

      User.create(newUser, (err, user) => {
        if (err) {
          res
            .status(500)
            .send({ message: 'There was an error during request. Please, try again later.' });
        }

        if (user) {
          res
            .status(200)
            .send({
              message: 'Your account was created succesfully. You can now login.',
            });
        }
      });
    });
  } else {
    res
      .status(400)
      .send({
        message: 'Incorrect data. Chech if all fields are filled correctly.'
      });
  }
}

export default register;
