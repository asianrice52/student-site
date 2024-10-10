import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import './ScheduleDay.css';

// Функция для преобразования первой буквы в верхний регистр
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ScheduleDay = ({ selectedDate }) => {
  const formattedDate = format(selectedDate, 'EEEE, d MMMM', { locale: ru });
  const capitalizedDate = capitalizeFirstLetter(formattedDate);

  return (
    <div className="day-schedule">
      <h2>{capitalizedDate}</h2>
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="schedule-item" key={index}>
          <span>08:00 - 08:50 <span className="bold-text">Название дисциплины</span></span>
          <span className="room-container">
            <HomeIcon className="room-icon" />
            Ауд.301
          </span>
        </div>
      ))}
    </div>
  );
};

export default ScheduleDay;
