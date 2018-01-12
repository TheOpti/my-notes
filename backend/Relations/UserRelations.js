import User from '../Models/User';
import Note from '../Models/Note';
import Tag from '../Models/User';

function initUserRelations() {

  // User can define multiple tags
  User.hasMany(Tag, {
    foreignKey: 'user_id',
    constraints: true,
  });

  // User can define multiple notes
  User.hasMany(Note, {
    foreignKey: 'user_id',
    constraints: true,
  });

}

export default initUserRelations;

