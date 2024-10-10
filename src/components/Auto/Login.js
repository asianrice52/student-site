import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Войти в личный кабинет</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username" className="username-label">Ваш логин</label>
            <input type="text" id="username" placeholder="Логин" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="password-label">Ваш пароль</label>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Пароль"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
              >
                {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
            <Link to="/forgot-password" className="forgot-password">Забыли пароль?</Link>
          </div>
          <button type="submit" className="login-button">Войти</button>
        </form>
        <hr className="divider" />
        <Link to="/register" className="register-link">Регистрация</Link>
      </div>
    </div>
  );
};

export default Login;
