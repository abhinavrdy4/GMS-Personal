import { useMemo } from 'react';
import { eventService } from '../services/eventService';
import type { Event, Workshop, RegularClass } from '../types/events';

export const useEvents = (category?: string) => {
  const events = useMemo(() => {
    if (!category) return eventService.getAllEvents();
    return eventService.getEventsByCategory(category);
  }, [category]);

  const workshops = useMemo(() => 
    events.filter((event): event is Workshop => event.type === 'workshop'),
    [events]
  );

  const regularClasses = useMemo(() => 
    events.filter((event): event is RegularClass => event.type === 'regular'),
    [events]
  );

  return {
    events,
    workshops,
    regularClasses,
    total: events.length,
    workshopsCount: workshops.length,
    regularClassesCount: regularClasses.length,
  };
};