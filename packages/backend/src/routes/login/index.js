import jwt from 'jsonwebtoken';
import { REPSONSE_MESSAGES } from 'src/constants';
import { encryptPassword } from 'src/utils/encrypt';
import { User } from 'src/models/user';

async function login(req, res) {
  const { login = '', password = '' } = req.body;

  if (!login || !password) {
    return res
      .status(400)
      .send({ message: REPSONSE_MESSAGES.INCORRECT_DATA });
  }

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
        .status(400)
        .send({ message: REPSONSE_MESSAGES.LOGIN_PASS_INCORRECT });
    }

    const token = jwt.sign({ login, type }, 'RESTFULAPIs');
    return res
      .status(200)
      .cookie('token', token, {
        expires: new Date(Date.now() + 604800000),
        secure: false,
        httpOnly: true,
      })
      .send({ message: REPSONSE_MESSAGES.LOGIN_OK });
  } catch (error) {
    return res
      .status(500)
      .send({ message: REPSONSE_MESSAGES.SERVER_ERROR });
  }
}

export default login;
