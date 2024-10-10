import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="registration-container registration-page">
      <div className="registration-box">
        <Link to="/" className="registration-back-link">
          <KeyboardBackspaceIcon />
          <span>Вернуться назад</span>
        </Link>
        <h2 className="registration-heading">Регистрация аккаунта</h2>
        <form>
          <div className="registration-form-group">
            <label htmlFor="username" className="registration-username-label">Придумайте логин</label>
            <input type="text" id="username" className="registration-username-input" placeholder="Придумайте логин" />
          </div>
          <div className="registration-form-group">
            <label htmlFor="password" className="registration-password-label">Придумайте пароль</label>
            <div className="registration-password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="registration-password-input"
                placeholder="Придумайте пароль"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="registration-password-toggle"
              >
                {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
          </div>
          <div className="registration-form-group">
            <label htmlFor="email" className="registration-email-label">Введите почту</label>
            <input type="email" id="email" className="registration-email-input" placeholder="Введите электронную почту" />
          </div>
          <button type="submit" className="registration-button">Регистрация</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;