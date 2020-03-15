import { encryptPassword, generateSalt } from '../../utils/encrypt';
import { USER_TYPES, REPSONSE_MESSAGES } from '../../constant';
import { User } from '../../models/user';

function register(req, res) {
  const { login, email, password, repeatedPassword } = req.body;

  const passwordOk = password && repeatedPassword && password === repeatedPassword
  const credentialsCorrect = login && email && passwordOk;

  if (!credentialsCorrect) {
    res
      .status(400)
      .send({ message: REPSONSE_MESSAGES.INCORRECT_DATA });

    return;
  }

  User.findOne({ $or: [{ login }, { email }] }, 'login', (err, user) => {
    if (err) {
      res
        .status(500)
        .send({ message: REPSONSE_MESSAGES.SERVER_ERROR });
    }

    if (user) {
      res
        .status(400)
        .send({ message: REPSONSE_MESSAGES.USER_EXISTS });

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
          .send({ message: REPSONSE_MESSAGES.SERVER_ERROR });
      }

      if (user) {
        res
          .status(200)
          .send({ message: REPSONSE_MESSAGES.ACCOUNT_CREATED });
      }
    });
  });
}

export default register;
