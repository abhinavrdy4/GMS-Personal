import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';
import type { Event } from '../../types/events';
import { isWorkshop } from '../../utils/eventUtils';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();
  const workshop = isWorkshop(event);

  const handleClick = () => {
    const path = workshop ? `/workshop/${event.id}` : `/class/${event.id}`;
    navigate(path);
  };

  return (
    <div
      onClick={handleClick}
      className="group glass-card rounded-xl overflow-hidden transition-all duration-300 
                hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
    >
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex flex-wrap gap-2">
            {event.categories.map(category => (
              <span key={category} className="inline-block px-3 py-1 rounded-full glass-card text-sm 
                                           font-medium text-gray-800 shadow-md backdrop-blur-sm">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors">
          {event.title}
        </h3>
        <div className="space-y-2">
          {workshop ? (
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
          ) : (
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {event.schedule.frequency}
              </div>
            </div>
          )}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {workshop ? event.attendees : `${event.attendees}/${event.maxCapacity}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};