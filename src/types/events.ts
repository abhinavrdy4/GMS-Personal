// Update the Workshop interface to use instagramStoryUrl instead of handle
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
  instagramStoryUrl?: string; // Changed from instagramHandle
  categories: string[];
  featured?: boolean;
  description: string;
  price: string;
  instructor?: string;
  schedule?: Array<{ time: string; activity: string }>;
  faqs?: FAQ[];
  ticketCategories: TicketCategory[];
}