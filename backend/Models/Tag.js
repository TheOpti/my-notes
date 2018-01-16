import sequelize from '../sequelize';
import Sequelize from 'sequelize';

const tagFields = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'id'
  },
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  userId: {
    type: Sequelize.UUID,
    field: 'user_id'
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    field: 'deleted'
  }
};

const Tag = sequelize.define('tag', tagFields);

export default Tag;
