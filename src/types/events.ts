export interface TicketCategory {
  id: string;
  name: string;
  price: number;
  description: string;
  enabled: boolean;
  endDate?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Workshop {
  id: number;
  type: 'workshop';
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  categories: string[];
  featured?: boolean;
  attendees: number;
  description: string;
  price: string;
  instructor?: string;
  schedule?: Array<{ time: string; activity: string }>;
  faqs?: FAQ[];
  ticketCategories: TicketCategory[];
}

// Rest of the file remains the same...