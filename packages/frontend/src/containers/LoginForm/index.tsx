import React, { Component } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';

import styles from './styles.css';

type LoginFormPropsType = {
  handleLogin: any,
}

type LoginFormStateType = {
  loginFormFields: {
    [fieldName: string]: string;
  };
  loading: boolean;
  errorMesage: string;
}

class LoginForm extends Component<LoginFormPropsType, LoginFormStateType> {
  state = {
    loginFormFields: {
      login: '',
      password: '',
    },
    errorMesage: '',
    loading: false
  };

  loginToApplication = async () => {
    const { handleLogin } = this.props;
    const { loginFormFields: { login, password } } = this.state;

    this.setState({ loading: true }, async () => {
      try {
        const response = await handleLogin(login, password);
        this.setState({ errorMesage: response, loading: false });
      } catch (error) {
        this.setState({ errorMesage: error })
      }
    });
  }

  updateField = (fieldName: string, value: string) => {
    this.setState((prevState) => ({
      ...prevState,
      loginFormFields: { 
        ...prevState.loginFormFields,
        [fieldName]: value,
      },
    }));
  };

  render() {
    const { loginFormFields: { login, password }, errorMesage } = this.state;

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
        {errorMesage && (
          <div className={styles.errorMessage}>
            { errorMesage }
          </div>
        )}
      </div>
    )
  }
}

export default LoginForm;
