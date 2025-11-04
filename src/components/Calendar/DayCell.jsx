"use client";

import React from 'react';

const DayCell = ({ day, onDateSelect, isSelected, hasReflection }) => {
  if (!day) {
    return <div className="border rounded-md p-2 text-center bg-gray-800"></div>;
  }

  const isToday = new Date().toDateString() === day.toDateString();

  const dayNumber = day.getDate();

  const selectedClasses = isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-700';
  const todayClasses = isToday ? 'ring-2 ring-blue-400' : '';
  const reflectionClasses = hasReflection ? 'border-b-4 border-green-500' : '';

  return (
    <div
      className={`border rounded-md p-2 text-center cursor-pointer transition-colors ${selectedClasses} ${todayClasses}`}
      onClick={() => onDateSelect(day)}
    >
      <div className="font-semibold">{dayNumber}</div>
      {hasReflection && <div className="mt-1 w-2 h-2 mx-auto bg-green-500 rounded-full"></div>}
    </div>
  );
};

export default DayCell;
