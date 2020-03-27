import { generateSalt, encryptPassword } from './encrypt';

describe('encrypt', () => {
  describe('generateSalt', () => {
    it('should generate salt', () => {
      const salt = generateSalt();

      expect(typeof salt).toBe('string');
      expect(salt).toHaveLength(8);
    });
  });

  describe('encryptPassword', () => {
    it('should generate correct hash for short password', () => {
      const hash = '1033ba955496ec05485f09aea21a5f2d8b3e1ba862718fbcc9ba66f7e8dad6ce';
      const hashFromFunction = encryptPassword('ala', '1Q2W3E');

      expect(hashFromFunction).toEqual(hash);
    });

    it('should generate correct hash for complex Password', () => {
      const hash = '94b02e4c5db1422f3efc5413762a9341057383061694e0a51a99af870cf692d8';
      const hashFromFunction = encryptPassword('C0Mpl3XP4ssW0rD', '1Q2W3E');
      
      expect(hashFromFunction).toEqual(hash);
    });
  })
});
