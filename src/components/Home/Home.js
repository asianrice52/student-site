import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Notification from '../Notification/Notification';
import './Home.css';
import logo from '../../assets/new_logo.png';
import slide1 from '../../assets/forest.jpg';
import slide2 from '../../assets/forest_2.jpg';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    toggleMenu();
    navigate('/');
  };

  const slides = [slide1, slide2];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="home-container">
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <header className="home-header">
        <MenuIcon className="menu-icon" onClick={toggleMenu} />
        <img src={logo} alt="ALMA University" className="university-logo" />
        <Notification /> {/* Используйте компонент Notification здесь */}
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
      <main className="home-main">
        <div className="slider" style={{ backgroundImage: `url(${slides[currentSlide]})` }}>
          <button className="slider-button prev-button" onClick={handlePrevSlide}>
            <ArrowBackIosIcon />
          </button>
          <div className="slider-content">
          </div>
          <button className="slider-button next-button" onClick={handleNextSlide}>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <section className="news-section">
          <h2>Новости</h2>
          <div className="news-grid">
            <div className="news-item red"></div>
            <div className="news-item blue"></div>
            <div className="news-item blue"></div>
            <div className="news-item red"></div>
          </div>
        </section>
        <section className="announcements-section">
          <h2>Объявления</h2>
          <div className="announcements-grid">
            <div className="announcement-item red"></div>
            <div className="announcement-item blue"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
