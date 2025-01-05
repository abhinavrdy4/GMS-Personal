// Common types shared between Workshops and Regular Classes
export interface BaseEvent {
  id: number;
  title: string;
  image: string;
  location: string;
  attendees: number;
  categories: string[];
  description: string;
}

export interface Workshop extends BaseEvent {
  type: 'workshop';
  date: string;
  time: string;
  price: string;
  instructor?: string;
  schedule: Array<{ time: string; activity: string }>;
  ticketCategories: TicketCategory[];
}

export interface RegularClass extends BaseEvent {
  type: 'regular';
  maxCapacity: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  instructor: {
    name: string;
    image: string;
    bio: string;
    expertise: string[];
  };
  schedule: ClassSchedule;
  subscriptionPlans: SubscriptionPlan[];
  reviews: Review[];
  requirements?: string[];
  amenities?: string[];
}

export type Event = Workshop | RegularClass;

// Existing types remain the same
export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userImage?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: 'monthly' | 'quarterly' | 'yearly';
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ClassSchedule {
  days: string[];
  timeSlots: {
    start: string;
    end: string;
  }[];
  frequency: string;
}

export interface TicketCategory {
  id: string;
  name: string;
  price: number;
  description: string;
  available: number;
  total: number;
  enabled: boolean;
  startDate?: string;
  endDate?: string;
}