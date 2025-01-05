// Update the BaseEvent interface to include the featured flag
export interface BaseEvent {
  id: number;
  title: string;
  image: string;
  location: string;
  attendees: number;
  categories: string[];
  description: string;
  featured?: boolean;
}

// Rest of the file remains the same...