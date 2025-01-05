import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Clock } from 'lucide-react';
import type { RegularClass } from '../../types/events';

interface RegularClassCardProps {
  classData: RegularClass;
}

export const RegularClassCard = ({ classData }: RegularClassCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate(`/class/${classData.id}`)}
      className="group glass-card rounded-xl overflow-hidden transition-all duration-300 
                hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
    >
      <div className="relative h-48">
        <img
          src={classData.image}
          alt={classData.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="inline-block px-3 py-1 rounded-full glass-card text-sm font-medium text-gray-800
                       shadow-md backdrop-blur-sm">
            {classData.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-600 transition-colors">
          {classData.title}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {classData.schedule.frequency}
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {classData.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {classData.attendees}/{classData.maxCapacity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};