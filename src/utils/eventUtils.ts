import type { Event } from '../types/events';

export const isWorkshop = (event: Event): event is Event & { type: 'workshop' } => 
  event.type === 'workshop';

export const isRegularClass = (event: Event): event is Event & { type: 'regular' } => 
  event.type === 'regular';

export const formatEventDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const formatEventTime = (time: string): string => {
  return new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });
};