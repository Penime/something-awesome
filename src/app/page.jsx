"use client";

import React, { useState } from 'react';
import Calendar from '@/components/Calendar/Calendar';
import ReflectionEditor from '@/components/Reflections/ReflectionEditor';
import { useReflections } from '@/hooks/useReflections';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { reflections, loading, saveReflection } = useReflections();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSaveReflection = async (entry, mood) => {
    await saveReflection(selectedDate, entry, mood);
    // Optionally, you can add a confirmation message here
  };

  const currentReflection = selectedDate
    ? reflections[selectedDate.toISOString().split('T')[0]]
    : null;

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <Calendar
          onDateSelect={handleDateSelect}
          selectedDate={selectedDate}
          reflections={reflections}
        />
      </div>
      <div className="w-full md:w-1/2">
        <ReflectionEditor
            selectedDate={selectedDate}
            reflection={currentReflection}
            onSave={handleSaveReflection}
            onCancel={() => setSelectedDate(null)} // Or keep the date selected
            isLoading={loading}
        />
      </div>
    </div>
  );
}
