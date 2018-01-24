import UserRepository from './Repository/UserRepository';
import TagRepository from './Repository/TagRepository';

async function initData() {
  const user = {
    login: 'test',
    password: '123123',
    email: 'test@email.com'
  };

  const addedUser = await UserRepository.addUser(user);
  const userId = addedUser.id;

  const tag1 = { name: 'Office' };
  const addedTag1 = await TagRepository.addTag(userId, tag1);

  const tag2 = { name: 'Home' };
  const addedTag2 = await TagRepository.addTag(userId, tag2);

  const tag3 = { name: 'Friends' };
  const addedTag3 = await TagRepository.addTag(userId, tag3);

}

export default initData;
