import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import './UserLogin.scss';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes';

const UserLogin = () => {
  const nav = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  //TODO: make this better
  const validateUsernameForm = (value) => {
    let errorUsernameMessage = '';
    if (!value) {
      errorUsernameMessage = 'Username is required';
    }
    return errorUsernameMessage;
  };

  const validatePasswordForm = (password) => {
    let errorPasswordMessage = '';
    if (!password || password.trim().length < 8) {
      errorPasswordMessage = 'Enter more of 8 chars';
    }
    return errorPasswordMessage;
  };

  const loginHandler = () => {
    localStorage.setItem('username', username);
    nav(ROUTES.contactForm);
  };

  const isLoginButtonDisabled = !!usernameError || !!passwordError;

  return (
    <div className="user-login-container">
      <Box className="user-login-box">
        <TextField
          className="input-field"
          label="Username: "
          type="text"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={() => {
            setUsernameError(validateUsernameForm(username));
          }}
        />
        {usernameError && <p className="error-message">{usernameError}</p>}
        <TextField
          className="input-field"
          label="Password: "
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => {
            setPasswordError(validatePasswordForm(password));
          }}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <Button
          className="login-btn"
          onClick={loginHandler}
          disabled={isLoginButtonDisabled}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default UserLogin;
