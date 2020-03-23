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

  login = () => {
    console.log('login');
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
          onClickHandler={this.login}
          label="Login"
          classname={styles.login}
        />
      </div>
    )
  }
}

export default LoginForm;
