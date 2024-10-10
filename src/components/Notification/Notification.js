import React, { useState, useEffect, useRef } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CampaignIcon from '@mui/icons-material/Campaign';
import './Notification.css';

const Notification = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Пример данных уведомлений
  const importantNotifications = [];
  const allNotifications = [
    "Расписание экзаменов бакалавриата 2023-2024",
    "Расписание экзаменов бакалавриата 2023-2024",
    "Расписание экзаменов бакалавриата 2023-2024"
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="notification-container" ref={menuRef}>
      <NotificationsIcon className="notifications-icon" onClick={toggleMenu} />
      {menuOpen && (
        <div className="notification-menu">
          <div className="notification-tabs">
            <div
              className={`notification-tab ${activeTab === 'important' ? 'active' : ''}`}
              onClick={() => handleTabChange('important')}
            >
              <PriorityHighIcon />
              Важное
            </div>
            <div
              className={`notification-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => handleTabChange('all')}
            >
              <CampaignIcon />
              Все уведомления
            </div>
          </div>
          <hr className="notification-divider" />
          <div className="notification-content">
            {activeTab === 'important' && (
              importantNotifications.length > 0 ? (
                importantNotifications.map((notification, index) => (
                  <div key={index} className="notification-item">{notification}</div>
                ))
              ) : (
                <div className="notification-empty">Пусто</div>
              )
            )}
            {activeTab === 'all' && (
              allNotifications.length > 0 ? (
                allNotifications.map((notification, index) => (
                  <div key={index} className="notification-item">{notification}</div>
                ))
              ) : (
                <div className="notification-empty">Пусто</div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;