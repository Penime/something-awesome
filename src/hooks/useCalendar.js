"use client";

import { useState } from 'react';

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const startDayOfWeek = firstDayOfMonth.getDay(); // 0 (Sun) - 6 (Sat)

  // Generate an array of days for the current month
  const calendarGrid = [];
  let day = 1;

  for (let i = 0; i < 6; i++) { // Max 6 weeks in a month
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < startDayOfWeek) {
        week.push(null); // Empty cell before the month starts
      } else if (day > daysInMonth) {
        week.push(null); // Empty cell after the month ends
      } else {
        week.push(new Date(year, month, day));
        day++;
      }
    }
    calendarGrid.push(week);
    if (day > daysInMonth) break;
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  return {
    currentDate,
    year,
    month,
    monthName,
    calendarGrid,
    goToPreviousMonth,
    goToNextMonth,
  };
};
