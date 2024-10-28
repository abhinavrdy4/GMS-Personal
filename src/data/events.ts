interface Event {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category?: string;
  categories?: string[];
  attendees: number;
  description?: string;
  price?: string;
  instructor?: string;
  contact?: string;
  schedule?: Array<{ time: string; activity: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  accessibility?: string;
  organizer?: {
    name: string;
    email: string;
    phone: string;
  };
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Summer Music Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 15',
    time: '4:00 PM',
    location: 'Central Park',
    category: 'Music',
    attendees: 234,
    description: 'Join us for an unforgettable evening of live music under the stars at Central Park\'s iconic amphitheater.',
    price: '$49.99',
    schedule: [
      { time: '4:00 PM', activity: 'Gates Open' },
      { time: '5:00 PM', activity: 'Opening Act: The Melodics' },
      { time: '6:30 PM', activity: 'Main Performance: Stellar Dreams' },
      { time: '8:00 PM', activity: 'Headliner: Electric Pulse' },
      { time: '10:30 PM', activity: 'Closing Ceremony' }
    ],
    faqs: [
      {
        question: 'What items are prohibited?',
        answer: 'Outside food and drinks, professional cameras, and recording equipment are not allowed.'
      },
      {
        question: 'Is there parking available?',
        answer: 'Yes, paid parking is available at the Central Park Garage.'
      }
    ],
    accessibility: 'Wheelchair accessible. ASL interpreters available upon request.',
    organizer: {
      name: 'Cityscape Events',
      email: 'info@cityscapeevents.com',
      phone: '(555) 123-4567'
    }
  },
  {
    id: 2,
    title: 'Art & Wine Evening',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 18',
    time: '7:00 PM',
    location: 'Downtown Gallery',
    category: 'Art',
    attendees: 89,
    description: 'Experience an evening of fine art and wine tasting in our beautiful downtown gallery.',
    price: '$75',
    schedule: [
      { time: '7:00 PM', activity: 'Welcome Reception' },
      { time: '7:30 PM', activity: 'Art Tour Begins' },
      { time: '8:30 PM', activity: 'Wine Tasting' },
      { time: '9:30 PM', activity: 'Artist Meet & Greet' }
    ],
    organizer: {
      name: 'Downtown Gallery',
      email: 'events@downtowngallery.com',
      phone: '(555) 234-5678'
    }
  },
  {
    id: 3,
    title: 'Poetry Slam Night',
    image: 'https://images.unsplash.com/photo-1525296335429-d479c92dd17a?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 20',
    time: '8:00 PM',
    location: 'The Coffee House',
    category: 'Poetry',
    attendees: 56,
    description: 'Join us for an evening of powerful spoken word performances.',
    price: '$15',
    organizer: {
      name: 'Literary Arts Society',
      email: 'poetry@literaryarts.com',
      phone: '(555) 345-6789'
    }
  },
  {
    id: 4,
    title: 'Photography Workshop',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 22',
    time: '10:00 AM',
    location: 'Creative Studio',
    category: 'Workshops',
    attendees: 45,
    description: 'Learn professional photography techniques in this hands-on workshop.',
    price: '$199',
    instructor: 'Michael Chen',
    contact: 'michael@creativestudio.com'
  },
  {
    id: 5,
    title: 'Bhangra Dance Workshop',
    image: 'https://storage.googleapis.com/cityvibe/IMG_8633.PNG?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 25',
    time: '6:30 PM',
    location: 'Dance Studio',
    categories: ['Dance', 'Workshops'],
    attendees: 123,
    description: 'Learn the high-energy traditional dance form of Bhangra! Perfect for beginners and dance enthusiasts, this workshop will get your heart pumping and feet moving.',
    price: '$35',
    instructor: 'Priya Singh',
    contact: 'priya@dancestudio.com',
    schedule: [
      { time: '6:30 PM', activity: 'Warm-up' },
      { time: '7:00 PM', activity: 'Basic Steps' },
      { time: '8:00 PM', activity: 'Choreography' },
      { time: '8:45 PM', activity: 'Cool-down' }
    ],
    faqs: [
      {
        question: 'Do I need prior dance experience?',
        answer: 'No prior experience needed! This workshop is suitable for all levels.'
      },
      {
        question: 'What should I wear?',
        answer: 'Comfortable workout clothes and athletic shoes.'
      }
    ]
  },
  {
    id: 6,
    title: 'Street Photography Walk',
    image: 'https://images.unsplash.com/photo-1502471602546-17554aac1160?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 27',
    time: '9:00 AM',
    location: 'City Center',
    category: 'Photography',
    attendees: 67,
    description: 'Explore urban photography techniques while walking through the city.',
    price: '$45',
    instructor: 'Sarah Williams',
    contact: 'sarah@photowalks.com'
  }
];

export const getEventById = (id: number): Event | undefined => {
  return events.find(event => event.id === id);
};