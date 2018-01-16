import Note from '../Models/Note';
import User from '../Models/User';
import Tag from '../Models/Tag';
import TagNote from '../Models/TagNote';

function initNoteRelations() {

  // Note belongs to user
  Note.belongsTo(User, {
    constraints: false
  });

  // Multiple notes have many tags
  Note.belongsToMany(Tag, {
    through: {
      model: TagNote,
      unique: false,
    },
    foreignKey: 'noteId',
    constraints: false
  });

}

export default initNoteRelations;

