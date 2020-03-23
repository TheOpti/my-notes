import React, { Component } from 'react';
import axios from 'axios';
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

  // TODO: as for now it is hardocded, but later it should be 
  loginToApplication = () => {
    axios.post('http://localhost:3000/login', {
      login: 'testuser',
      password: 'test'
    }, { withCredentials: true });
  }

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
          onClickHandler={this.loginToApplication}
          label="Login"
          classname={styles.login}
        />
      </div>
    )
  }
}

export default LoginForm;
