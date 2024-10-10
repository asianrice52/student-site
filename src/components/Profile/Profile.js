import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import Notification from '../Notification/Notification';
import './Profile.css';
import logo from '../../assets/new_logo.png';

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('personalInfo'); // State to manage active tab
  const [formData, setFormData] = useState({
    fullName: 'Акимжанов Ануар Акимжанович',
    course: '2',
    specialty: 'Software Engineering',
    status: 'Бакалавриат',
    email: 'akimzhanov-2017@mail.ru'
  });

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    toggleMenu();
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'settings':
        return (
          <div className="content">
            <h1>Настройки</h1>
            <form className="settings-form">
              <label>
                ФИО:
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
              </label>
              <label>
                Курс:
                <input type="text" name="course" value={formData.course} onChange={handleInputChange} />
              </label>
              <label>
                Специальность:
                <input type="text" name="specialty" value={formData.specialty} onChange={handleInputChange} />
              </label>
              <label>
                Статус:
                <input type="text" name="status" value={formData.status} onChange={handleInputChange} />
              </label>
              <label>
                Почта:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
              </label>
            </form>
          </div>
        );
      case 'personalInfo':
      default:
        return (
          <div className="content">
            <h1>Личные данные</h1>
            <div className="personal-info">
              <p>ФИО: {formData.fullName}</p>
              <p>Курс: {formData.course}</p>
              <p>Специальность: {formData.specialty}</p>
              <p>Статус: {formData.status}</p>
              <p>Почта: {formData.email}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="profile-container">
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <header className="profile-header">
        <MenuIcon className="menu-icon" onClick={toggleMenu} />
        <img src={logo} alt="ALMA University" className="university-logo" />
        <Notification />
      </header>
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <CloseIcon className="close-icon" onClick={toggleMenu} />
        <img src={logo} alt="ALMA University" className="side-menu-logo" />
        <nav className="side-menu-nav">
          <Link 
            to="/profile" 
            onClick={toggleMenu} 
            className={location.pathname === '/profile' ? 'active' : ''}
          >
            <PermIdentityIcon className="menu-icon" /> Личный кабинет
          </Link>
          <Link 
            to="/schedule" 
            onClick={toggleMenu} 
            className={location.pathname === '/schedule' ? 'active' : ''}
          >
            <CalendarMonthIcon className="menu-icon" /> Расписание
          </Link>
          <Link 
            to="/journal" 
            onClick={toggleMenu} 
            className={location.pathname === '/journal' ? 'active' : ''}
          >
            <AssignmentIcon className="menu-icon" /> Журнал
          </Link>
          <Link 
            to="/application" 
            onClick={toggleMenu} 
            className={location.pathname === '/application' ? 'active' : ''}
          >
            <NoteAltIcon className="menu-icon" /> Заявление
          </Link>
          <Link 
            to="/home" 
            onClick={toggleMenu} 
            className={location.pathname === '/home' ? 'active' : ''}
          >
            <NewspaperIcon className="menu-icon" /> Новости
          </Link>
          <Link 
            to="/" 
            onClick={handleLogout} 
            className={location.pathname === '/' ? 'active' : ''}
          >
            <ExitToAppIcon className="menu-icon" /> Выйти
          </Link>
        </nav>
      </div>
      <main className="profile-main">
        <div className="profile-sidebar">
          <button onClick={() => setActiveTab('personalInfo')} className={`sidebar-button ${activeTab === 'personalInfo' ? 'active' : ''}`}>
            <PermIdentityIcon className="sidebar-icon" /> Личные данные
          </button>
          <button onClick={() => setActiveTab('settings')} className={`sidebar-button ${activeTab === 'settings' ? 'active' : ''}`}>
            <SettingsIcon className="sidebar-icon" /> Настройки
          </button>
          <button onClick={handleLogout} className="sidebar-button">
            <ExitToAppIcon className="sidebar-icon" /> Выход
          </button>
        </div>
        <div className="profile-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Profile;
