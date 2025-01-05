import React from 'react';
import { useParams } from 'react-router-dom';
import { EventCard } from '../components/EventCard/EventCard';
import { eventService } from '../services/eventService';

export const CategoryEvents = () => {
  const { category } = useParams<{ category: string }>();
  const events = category ? eventService.getEventsByCategory(category) : [];
  
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {category} Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};