"use client";

import React, { useState, useEffect } from 'react';
import MoodSelector from './MoodSelector';
import Button from '@/components/ui/Button';

const ReflectionEditor = ({ selectedDate, reflection, onSave, onCancel, isLoading }) => {
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState('Neutral');

  useEffect(() => {
    if (reflection) {
      setEntry(reflection.entry || '');
      setMood(reflection.mood || 'Neutral');
    } else {
      setEntry('');
      setMood('Neutral');
    }
  }, [reflection]);

  const handleSave = () => {
    onSave(entry, mood);
  };

  if (!selectedDate) {
    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex-1">
            <h2 className="text-xl font-bold text-white">Select a date</h2>
            <p className="text-gray-400 mt-2">Choose a day from the calendar to view or add a reflection.</p>
        </div>
    );
  }

  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex-1">
      <h2 className="text-xl font-bold text-white">Reflection for {formattedDate}</h2>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full h-40 p-2 mt-4 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="How was your day?"
      />

      <MoodSelector selectedMood={mood} onMoodChange={setMood} />

      <div className="flex justify-end space-x-2 mt-4">
        <Button onClick={onCancel} className="bg-gray-600 hover:bg-gray-500">Cancel</Button>
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Reflection'}
        </Button>
      </div>
    </div>
  );
};

export default ReflectionEditor;
