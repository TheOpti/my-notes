import sequelize from '../sequelize';
import Sequelize from 'sequelize';

const userFields = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    field: 'id'
  },
  login: {
    type: Sequelize.STRING,
    field: 'login'
  },
  password: {
    type: Sequelize.STRING,
    field: 'password'
  },
  salt: {
    type: Sequelize.STRING,
    field: 'salt'
  },
  email: {
    type: Sequelize.STRING,
    field: 'email'
  },
  registration_date: {
    type: Sequelize.DATE,
    field: 'registration_date'
  },
};

const User = sequelize.define('user', userFields);

User.sync({force: false});

export default User;
