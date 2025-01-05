import React from 'react';
import { useEvents } from '../../hooks/useEvents';
import { EventCard } from '../EventCard/EventCard';

interface TrendingSectionProps {
  title: string;
  subtitle?: string;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ title, subtitle }) => {
  const { workshops, regularClasses } = useEvents();

  const trendingWorkshops = workshops.slice(0, 3);
  const trendingClasses = regularClasses.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-gray-600">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {title.includes('Workshop') 
          ? trendingWorkshops.map(workshop => (
              <EventCard key={workshop.id} event={workshop} />
            ))
          : trendingClasses.map(class_ => (
              <EventCard key={class_.id} event={class_} />
            ))
        }
      </div>
    </div>
  );
};