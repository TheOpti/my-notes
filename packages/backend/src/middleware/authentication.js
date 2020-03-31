import jwt from 'jsonwebtoken';
import { REPSONSE_MESSAGES } from '../constants';

function allowAuthentication(req, res, next) {
  const token = req.cookies.token || '';

  try {
    if (!token) {
      return res
        .status(401)
        .send({ message: REPSONSE_MESSAGES.YOU_NEED_LOGIN });
    }

    const decrypt = jwt.verify(token, 'RESTFULAPIs');
    req.user = decrypt;

    next();
  } catch (err) {
    return res
      .status(500)
      .send({
        message: REPSONSE_MESSAGES.SERVER_ERROR,
        error: err,
      });
  }
}

export default allowAuthentication;