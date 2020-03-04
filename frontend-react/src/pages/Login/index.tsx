import React, { PureComponent } from 'react';

import LoginForm from '../../containers/LoginForm';
import styles from './styles.css';


class Login extends PureComponent {
  render() {
    return (
      <div className={styles.login}>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
