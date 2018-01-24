import UserRepository from './Repository/UserRepository';

async function initData() {
  const user = {
    login: 'test',
    password: '123123',
    email: 'test@email.com'
  };

  const addedUser = await UserRepository.addUser(user);

}

export default initData;
