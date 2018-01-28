import UserRepository from './Repository/UserRepository';
import NoteRepository from './Repository/NoteRepository';
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
  await TagRepository.addTag(userId, tag3);

  const tagOneWithId = Object.assign({}, tag1, { id: addedTag1.id});
  const tagTwoWithId = Object.assign({}, tag1, { id: addedTag2.id});

  const note1 = {
    post: 'Buy milk and 10 eggs',
    title: 'This is first post',
    type: 'note',
    color: 'white',
    reminder: '',
  };

  const note2 = {
    post: 'Prepare for exam for maths',
    title: 'University!',
    type: 'note',
    color: 'orange',
    reminder: '',
    tags: [
      tagOneWithId,
      tagTwoWithId
    ]
  };

  await NoteRepository.addNote(userId, note1);
  await NoteRepository.addNote(userId, note2);

}

export default initData;
