import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Забыли свой пароль?</h2>
        <form>
          <div className="forgot-password-form-group">
            <label htmlFor="email" className="forgot-password-email-label">Введите свою электронную почту</label>
            <input type="email" id="email" className="forgot-password-email-input" placeholder="Ваша почта" />
          </div>
          <p className="info-text">Вам на электронную почту придёт письмо для восстановления доступа</p>
          <button type="submit" className="reset-button">Восстановить доступ</button>
        </form>
        <Link to="/" className="back-to-login">Вернуться на страницу авторизации</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
