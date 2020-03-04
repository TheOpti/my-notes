import React, { Component } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles.css';

type LoginFormState = {
  [fieldName: string]: string
}

class LoginForm extends Component<{}, LoginFormState> {
  state = {
    login: '',
    password: '',
  };

  proceedToRegister = () => {
    console.log('proceedToRegister');
  };

  updateField = (fieldName: string, value: string) => {
    this.setState({
      [fieldName]: value,
    });
  };

  render() {
    const { login, password } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.title}>
          Is it you first visit?
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.sectionTitle}>
              Yes, I would like to create an account
            </div>
            <Button 
              onClickHandler={this.proceedToRegister}
              label="Register"
              classname={styles.registerBtn}
            />
          </div>
          <div className={styles.divider} />
          <div className={styles.right}>
            <div className={styles.sectionTitle}>
              No, I am already registered
            </div>
            <Input
              label="Login"
              name="login"
              value={login}
              handleChange={this.updateField}
            />
            <Input
              label="Password"
              name="password"
              value={password}
              handleChange={this.updateField}
            />
            <Button 
              onClickHandler={this.proceedToRegister}
              label="Login"
              classname={styles.registerBtn}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;
