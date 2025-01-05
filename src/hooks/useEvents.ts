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

  const featuredWorkshops = useMemo(() => 
    workshops.filter(workshop => workshop.featured),
    [workshops]
  );

  const featuredClasses = useMemo(() => 
    regularClasses.filter(class_ => class_.featured),
    [regularClasses]
  );

  return {
    events,
    workshops,
    regularClasses,
    featuredWorkshops,
    featuredClasses,
    total: events.length,
    workshopsCount: workshops.length,
    regularClassesCount: regularClasses.length,
  };
};