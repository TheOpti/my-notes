import sequelize from '../sequelize';
import Sequelize from 'sequelize';

const noteFields = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'id'
  },
  title: {
    type: Sequelize.STRING,
    field: 'title'
  },
  post: {
    type: Sequelize.STRING,
    field: 'post'
  },
  type: {
    type: Sequelize.STRING,
    field: 'type'
  },
  reminder: {
    type: Sequelize.STRING,
    field: 'reminder'
  },
  userId: {
    type: Sequelize.UUID,
    field: 'user_id'
  }
};

const Note = sequelize.define('note', noteFields);

export default Note;
