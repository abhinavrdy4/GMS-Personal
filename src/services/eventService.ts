import type { Event, Workshop, RegularClass } from '../types/events';
import { workshops } from '../data/workshops';
import { regularClasses } from '../data/regularClasses';

export const eventService = {
  getAllEvents(): Event[] {
    return [...workshops, ...regularClasses];
  },

  getWorkshops(): Workshop[] {
    return workshops;
  },

  getRegularClasses(): RegularClass[] {
    return regularClasses;
  },

  getEventsByCategory(category: string): Event[] {
    return this.getAllEvents().filter(event => 
      event.categories.includes(category)
    );
  },

  getEventById(id: number): Event | undefined {
    return this.getAllEvents().find(event => event.id === id);
  },

  getWorkshopById(id: number): Workshop | undefined {
    return workshops.find(workshop => workshop.id === id);
  },

  getRegularClassById(id: number): RegularClass | undefined {
    return regularClasses.find(class_ => class_.id === id);
  }
};