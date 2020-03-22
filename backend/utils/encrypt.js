import crypto from 'crypto';

function generateSalt() {
  return crypto
    .randomBytes(4)
    .toString('hex');
}

function encryptPassword(password, salt) {
  return crypto
    .createHash('sha256')
    .update(password + salt)
    .digest('hex');
}

export {
  generateSalt,
  encryptPassword
}
