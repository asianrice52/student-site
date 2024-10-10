import React from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';
import './ScheduleWeek.css';

// Функция для преобразования первой буквы в верхний регистр
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ScheduleWeek = ({ selectedDate }) => {
  const startOfWeekDate = startOfWeek(selectedDate, { locale: ru });
  const days = Array.from({ length: 7 }).map((_, index) => addDays(startOfWeekDate, index));

  return (
    <div className="week-schedule">
      <table>
        <thead>
          <tr>
            {days.map((day) => {
              const formattedDate = format(day, 'EEEE, d MMMM', { locale: ru });
              const capitalizedDate = capitalizeFirstLetter(formattedDate);
              return <th key={day}>{capitalizedDate}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {days.map((day, colIndex) => (
                <td key={colIndex}>
                  <span>08:00 - 08:50 <span className="bold-text">Название дисциплины</span></span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleWeek;
