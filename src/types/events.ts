export interface TicketCategory {
  id: string;
  name: string;
  price: number;
  description: string;
  enabled: boolean;
  endDate?: string;
  bookingLink?: string;
}

export interface Workshop {
  id: number;
  type: 'workshop';
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  locationUrl?: string;
  locationDescription?: string;
  instagramStoryUrl?: string;
  categories: string[];
  featured?: boolean;
  description: string;
  price: string;
  schedule?: Array<{ time: string; activity: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  ticketCategories: TicketCategory[];
  studioGuidelines?: string[]; // Add this field
}

// ... rest of the types remain the same