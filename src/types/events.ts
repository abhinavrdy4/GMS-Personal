export interface TicketCategory {
  id: string;
  name: string;
  price: number;
  description: string;
  enabled: boolean;
  endDate?: string;
  bookingLink?: string; // Add this field
}