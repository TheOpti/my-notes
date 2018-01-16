import User from '../Models/User';
import Note from '../Models/Note';
import Tag from '../Models/Tag';

function initUserRelations() {

  // User can define multiple tags
  User.hasMany(Tag, {
    constraints: true,
  });

  // User can define multiple notes
  User.hasMany(Note, {
    constraints: true,
  });

}

export default initUserRelations;

