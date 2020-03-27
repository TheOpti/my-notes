
export const USER_TYPES = {
  USER: 'user',
  ADMIN: 'admin',
}

export const REPSONSE_MESSAGES = {
  // 200 - OK
  LOGIN_OK: 'Logged successfully',
  ACCOUNT_CREATED: 'Your account was created succesfully. You can now login.',
  LOG_OUT_OK: 'Succesfully logged out from the application.',

  // 400 - user errors
  USER_EXISTS: 'User already exists. You have to select another email or login.',
  INCORRECT_DATA: 'Incorrect data. Chech if all fields are filled correctly.',
  NO_USER_WITH_LOGIN: 'There is no user with given login',
  LOGIN_PASS_INCORRECT: 'Incorrect login or password',
  YOU_NEED_LOGIN: 'You need to Login',
  
  // 500 - server errors
  SERVER_ERROR: 'There was an error during request. Please, try again later.',
}