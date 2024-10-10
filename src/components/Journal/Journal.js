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
import './Journal.css';
import logo from '../../assets/new_logo.png';

const Journal = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState('Весенний семестр 2023-2024');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setMenuOpen(false);
    navigate('/');
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    // Add logic to update the journal data based on the selected semester
  };

  const data = [
    { discipline: 'Название дисциплины', пропуски: 0, РК1: 70, РК2: 70, РД: 70, ИК: 70, FX: '-', ИО: 70 },
    { discipline: 'Название дисциплины', пропуски: 0, РК1: 70, РК2: 70, РД: 40, ИК: 40, FX: '-', ИО: 40 },
    { discipline: 'Название дисциплины', пропуски: 0, РК1: 70, РК2: 70, РД: 40, ИК: 40, FX: '-', ИО: 40 },
    { discipline: 'Название дисциплины', пропуски: 0, РК1: 70, РК2: 70, РД: 40, ИК: 40, FX: '-', ИО: 40 },
    { discipline: 'Название дисциплины', пропуски: 0, РК1: 70, РК2: 70, РД: 40, ИК: 40, FX: '-', ИО: 40 },
    
    // Add more data as needed
  ];

  return (
    <div className="journal-container">
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <header className="journal-header">
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
      <main className="journal-main">
        <div className="header-content-2">
          <h1>Журнал</h1>
          <select onChange={handleSemesterChange} value={selectedSemester} className="semester-select">
            <option value="Весенний семестр 2023-2024">Весенний семестр 2023-2024</option>
            <option value="Осенний семестр 2023-2024">Осенний семестр 2023-2024</option>
            <option value="Летний семестр 2023-2024">Летний семестр 2023-2024</option>
            <option value="Зимний семестр 2023-2024">Зимний семестр 2023-2024</option>
          </select>
        </div>
        <div className="journal-content-wrapper">
          <table className="journal-table">
            <thead>
              <tr>
                <th>Дисциплина</th>
                <th>Пропуски</th>
                <th>РК1</th>
                <th>РК2</th>
                <th>РД</th>
                <th>Д</th>
                <th>ИК</th>
                <th>FX</th>
                <th>ИО</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="discipline-name">{item.discipline}</td>
                  <td>{item.пропуски}</td>
                  <td>{item.РК1}</td>
                  <td>{item.РК2}</td>
                  <td>{item.РД}</td>
                  <td className={`dopusk ${item.РД >= 50 ? 'допуск' : 'недопуск'}`}>{item.РД >= 50 ? 'Д' : 'Н'}</td>
                  <td>{item.ИК}</td>
                  <td>{item.FX}</td>
                  <td>{item.ИО}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Journal;
