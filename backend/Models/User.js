import sequelize from '../sequelize';
import Sequelize from 'sequelize';

const userFields = {
  login: {
    type: Sequelize.STRING,
    field: 'login'
  },
  password: {
    type: Sequelize.STRING,
    field: 'password'
  },
  email: {
    type: Sequelize.STRING,
    field: 'email'
  },
};

const User = sequelize.define('user', userFields);

User.sync({force: false});

export default User;
