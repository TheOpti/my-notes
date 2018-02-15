import sequelize from '../sequelize';
import Sequelize from 'sequelize';
import DataTypes from 'sequelize';

const tagNoteFields = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'id',
    defaultValue: DataTypes.UUIDV1
  },
  tagId: {
    type: Sequelize.UUID,
    field: 'tag_id'
  },
  noteId: {
    type: Sequelize.UUID,
    field: 'note_id'
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    field: 'deleted'
  }
};

const TagNote = sequelize.define('tag_note', tagNoteFields);

export default TagNote;
