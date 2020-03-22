import { encryptPassword, generateSalt } from '../../utils/encrypt';
import { USER_TYPES, REPSONSE_MESSAGES } from '../../constant';
import { User } from '../../models/user';

function register(req, res) {
  const { login, email, password, repeatedPassword } = req.body;

  const passwordOk = password && repeatedPassword && password === repeatedPassword
  const credentialsCorrect = login && email && passwordOk;

  if (!credentialsCorrect) {
    return res
      .status(400)
      .send({ message: REPSONSE_MESSAGES.INCORRECT_DATA });
  }

  User.findOne({ $or: [{ login }, { email }] }, 'login', (err, user) => {
    if (err) {
      return res
        .status(500)
        .send({ message: REPSONSE_MESSAGES.SERVER_ERROR });
    }

    if (user) {
      return res
        .status(400)
        .send({ message: REPSONSE_MESSAGES.USER_EXISTS });
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
        return res
          .status(500)
          .send({ message: REPSONSE_MESSAGES.SERVER_ERROR });
      }

      if (user) {
        return res
          .status(200)
          .send({ message: REPSONSE_MESSAGES.ACCOUNT_CREATED });
      }
    });
  });
}

export default register;
