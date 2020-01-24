import React, { PureComponent } from 'react';

import Button from '../../components/Button';
import styles from './styles.css';


class Login extends PureComponent {
  render() {
    return (
      <div className={styles.login}>
        This is first page component - Login Page
        <div>
          <Button 
            onClickHandler={() => {}} 
            label="Example" 
          />
        </div>
      </div>
    );
  }
}

export default Login;
