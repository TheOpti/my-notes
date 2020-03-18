import { generateSalt, encryptPassword } from './encrypt';

describe('encrypt', () => {

  describe('generateSalt', () => {
    const salt = generateSalt();
    expect(salt).toBe(true);
  });

  describe('encryptPassword', () => {
    
  });
});
