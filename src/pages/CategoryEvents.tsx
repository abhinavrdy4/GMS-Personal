import React from 'react';
import { useParams } from 'react-router-dom';
import { EventsGrid } from '../components/EventsGrid';

export const CategoryEvents = () => {
  const { category } = useParams();
  
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {category} Events
        </h1>
        <EventsGrid category={category} />
      </div>
    </div>
  );
};