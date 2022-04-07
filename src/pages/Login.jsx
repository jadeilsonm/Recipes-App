import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Button, Form, ContainerLogin } from './style';
import logo from '../images/logoRed.png';

export default function Login() {
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const { email, handleChangeEmail,
    password, handleChangePassword,
  } = useContext(UserContext);

  const history = useHistory();
  const reditectTo = () => history.push('/foods');

  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  const checkEmail = () => /^\S+@\S+\.\S+$/.test(email);

  const checkPassword = () => {
    const minLength = 7;
    return (password.length) >= minLength;
  };

  const enableButton = () => {
    if (checkEmail() && checkPassword()) {
      setIsLoginButtonDisabled(false);
    } else {
      setIsLoginButtonDisabled(true);
    }
  };
  useEffect(() => {
    enableButton();
  });

  const onLoginSubmitButton = () => {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
    reditectTo();
  };

  return (
    <ContainerLogin>
      <img alt="logo" src={ logo } />
      <Form>
        <input
          data-testid="email-input"
          placeholder="Email"
          type="text"
          value={ email }
          onChange={ handleChangeEmail }
        />
        <input
          data-testid="password-input"
          placeholder="Password"
          type="password"
          value={ password }
          onChange={ handleChangePassword }
        />
        <Button
          data-testid="login-submit-btn"
          type="button"
          disabled={ isLoginButtonDisabled }
          onClick={ onLoginSubmitButton }
        >
          Enter
        </Button>
      </Form>
    </ContainerLogin>
  );
}
