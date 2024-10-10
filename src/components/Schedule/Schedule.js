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
import Notification from '../Notification/Notification';
import Calendar from '../Calendar/Calendar';
import ScheduleDay from '../ScheduleDay/ScheduleDay';
import ScheduleWeek from '../ScheduleWeek/ScheduleWeek';
import './Schedule.css';
import logo from '../../assets/new_logo.png';

const Schedule = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('day'); // 'day' or 'week'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setMenuOpen(false);
    navigate('/');
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="schedule-container">
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <header className="schedule-header">
        <MenuIcon className="menu-icon" onClick={toggleMenu} />
        <img src={logo} alt="ALMA University" className="university-logo" />
        <Notification />
      </header>
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <CloseIcon className="close-icon" onClick={toggleMenu} />
        <img src={logo} alt="ALMA University" className="side-menu-logo" />
        <nav className="side-menu-nav">
          <Link to="/profile" onClick={toggleMenu} className={location.pathname === '/profile' ? 'active' : ''}>
            <PermIdentityIcon className="menu-icon" /> Личный кабинет
          </Link>
          <Link to="/schedule" onClick={toggleMenu} className={location.pathname === '/schedule' ? 'active' : ''}>
            <CalendarMonthIcon className="menu-icon" /> Расписание
          </Link>
          <Link to="/journal" onClick={toggleMenu} className={location.pathname === '/journal' ? 'active' : ''}>
            <AssignmentIcon className="menu-icon" /> Журнал
          </Link>
          <Link to="/application" onClick={toggleMenu} className={location.pathname === '/application' ? 'active' : ''}>
            <NoteAltIcon className="menu-icon" /> Заявление
          </Link>
          <Link to="/home" onClick={toggleMenu} className={location.pathname === '/home' ? 'active' : ''}>
            <NewspaperIcon className="menu-icon" /> Новости
          </Link>
          <Link to="/" onClick={handleLogout} className={location.pathname === '/' ? 'active' : ''}>
            <ExitToAppIcon className="menu-icon" /> Выйти
          </Link>
        </nav>
      </div>
      <main className="schedule-main">
        <div className="header-content">
          <h1>Расписание</h1>
          <select onChange={(e) => setViewMode(e.target.value)} value={viewMode}>
            <option value="day">День</option>
            <option value="week">Неделя</option>
          </select>
        </div>
        <div className="main-content">
          <div className="schedule-content-wrapper">
              {viewMode === 'day' ? <ScheduleDay selectedDate={selectedDate} /> : <ScheduleWeek selectedDate={selectedDate} />}
          </div>
          <div className="calendar-container">
            <Calendar onDateSelect={handleDateSelect} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Schedule;
