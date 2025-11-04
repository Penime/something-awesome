"use client";

import { useState } from 'react';

// Mock initial data
const initialReflections = {
  '2025-11-01': {
    id: '2025-11-01',
    entry: 'Started a new project today. Feeling excited!',
    mood: 'Joyful',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  '2025-11-05': {
    id: '2025-11-05',
    entry: 'A bit of a slow day, but got some reading done.',
    mood: 'Neutral',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

// Custom hook to manage reflections data
export const useReflections = () => {
  const [reflections, setReflections] = useState(initialReflections);
  const [loading, setLoading] = useState(false);

  // Function to get a reflection for a specific date
  const getReflection = (date) => {
    if (!date) return null;
    const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD
    return reflections[dateString];
  };

  // Function to save (add or update) a reflection
  const saveReflection = async (date, entry, mood) => {
    if (!date) return;
    setLoading(true);

    const dateString = date.toISOString().split('T')[0];
    const newReflection = {
      id: dateString,
      entry,
      mood,
      createdAt: reflections[dateString]?.createdAt || new Date(),
      updatedAt: new Date(),
    };

    // Simulate an async operation
    await new Promise(resolve => setTimeout(resolve, 300));

    setReflections(prev => ({
      ...prev,
      [dateString]: newReflection,
    }));

    setLoading(false);
  };

  return {
    reflections,
    loading,
    getReflection,
    saveReflection,
  };
};
