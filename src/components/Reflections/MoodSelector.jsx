"use client";

import React from 'react';

const MoodSelector = ({ selectedMood, onMoodChange }) => {
  const moods = ['Joyful', 'Neutral', 'Stressed', 'Sad', 'Productive'];

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {moods.map(mood => (
        <button
          key={mood}
          onClick={() => onMoodChange(mood)}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors
            ${selectedMood === mood
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
            }`}
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
