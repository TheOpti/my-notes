import Tag from '../Models/Tag';
import User from '../Models/User';
import Note from '../Models/Note';
import TagNote from '../Models/TagNote';

function initTagRelations() {

  // Many tags are defined by a single user
  Tag.belongsTo(User, {
    constraints: false
  });

  // Multiple tags can be applied to many notes
  Tag.belongsToMany(Note, {
    through: {
      model: TagNote,
      unique: false,
    },
    foreignKey: 'tagId',
    constraints: false
  });

}

export default initTagRelations;

