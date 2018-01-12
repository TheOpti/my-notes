import sequelize from '../sequelize';
import Sequelize from 'sequelize';

const tagNoteFields = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'id'
  },
  tagId: {
    type: Sequelize.UUID,
    field: 'tag_id'
  },
  noteId: {
    type: Sequelize.UUID,
    field: 'note_id'
  }
};

const TagNote = sequelize.define('tag_note', tagNoteFields);

export default TagNote;
