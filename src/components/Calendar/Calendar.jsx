"use client";

import React from 'react';
import { useCalendar } from '@/hooks/useCalendar';
import DayCell from './DayCell';
import Button from '@/components/ui/Button';

const Calendar = ({ onDateSelect, selectedDate, reflections = {} }) => {
  const {
    year,
    monthName,
    calendarGrid,
    goToPreviousMonth,
    goToNextMonth,
  } = useCalendar();

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const formatDate = (date) => date.toISOString().split('T')[0]; // YYYY-MM-DD

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={goToPreviousMonth}>&lt; Prev</Button>
        <h2 className="text-2xl font-bold text-white">{monthName} {year}</h2>
        <Button onClick={goToNextMonth}>Next &gt;</Button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map(day => (
          <div key={day} className="text-center font-semibold text-gray-400">{day}</div>
        ))}
        {calendarGrid.flat().map((day, index) => (
          <DayCell
            key={day ? day.toISOString() : `empty-${index}`}
            day={day}
            onDateSelect={onDateSelect}
            isSelected={day && selectedDate && day.toDateString() === selectedDate.toDateString()}
            hasReflection={day && reflections[formatDate(day)]}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
