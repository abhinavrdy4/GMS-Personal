import React from 'react';
import { MapPin, Calendar, Heart, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { events } from '../data/events';

interface EventsGridProps {
  category?: string;
}

export const EventsGrid = ({ category }: EventsGridProps) => {
  const navigate = useNavigate();
  const filteredEvents = category 
    ? events.filter(event => 
        'categories' in event 
          ? event.categories?.includes(category)
          : event.category === category
      )
    : events;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {category ? `${category} Events` : 'Trending Events'}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="group glass-card rounded-xl overflow-hidden transition-all duration-300 
                     hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate(`/event/${event.id}`)}
          >
            <div className="relative h-48">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button 
                className="absolute top-4 right-4 p-2 rounded-full glass-card hover:bg-white/50 transition-colors
                         shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle like functionality
                }}
              >
                <Heart className="w-5 h-5 text-gray-700 hover:text-pink-500 transition-colors" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="inline-block px-3 py-1 rounded-full glass-card text-sm font-medium text-gray-800
                             shadow-md backdrop-blur-sm">
                  {'categories' in event ? event.categories[0] : event.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                {event.title}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {event.attendees}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};