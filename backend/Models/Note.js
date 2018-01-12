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
    field: 'name'
  },
  post: {
    type: Sequelize.STRING,
    field: 'name'
  },
  type: {
    type: Sequelize.STRING,
    field: 'name'
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
