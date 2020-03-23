import { REPSONSE_MESSAGES } from '../../constants';

async function logout(_, res) {
  res
    .clearCookie('token')
    .send({
      message: REPSONSE_MESSAGES.LOG_OUT_OK
    });
}

export default logout;
