import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function Login() {
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const { email, handleChangeEmail,
    password, handleChangePassword,
  } = useContext(UserContext);

  const history = useHistory();
  const reditectTo = () => history.push('/foods');

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
    <div>
      <h2>Login</h2>
      <form
        onSubmit={ (event) => {
          event.preventDefault();
          onLoginSubmitButton();
        } }
      >
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
        <button
          data-testid="login-submit-btn"
          type="submit"
          disabled={ isLoginButtonDisabled }
        >
          Enter
        </button>
      </form>
    </div>
  );
}
