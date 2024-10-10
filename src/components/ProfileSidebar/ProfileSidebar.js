import React from 'react';
import './ProfileSidebar.css';

const ProfileSidebar = ({ activeTab, setActiveTab, handleLogout }) => {
  return (
    <div className="profile-sidebar">
      <button onClick={() => setActiveTab('personalInfo')} className={`sidebar-button ${activeTab === 'personalInfo' ? 'active' : ''}`}>
        Личные данные
      </button>
      <button onClick={() => setActiveTab('settings')} className={`sidebar-button ${activeTab === 'settings' ? 'active' : ''}`}>
        Настройки
      </button>
      <button onClick={handleLogout} className="sidebar-button">
        Выход
      </button>
    </div>
  );
};

export default ProfileSidebar;
