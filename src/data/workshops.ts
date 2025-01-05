import type { Workshop } from '../types/events';

export const workshops: Workshop[] = [
  {
    id: 1,
    type: 'workshop',
    title: 'Summer Music Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',
    date: 'Aug 15',
    time: '4:00 PM',
    location: 'Central Park',
    categories: ['Music', 'Workshops'],
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
    ticketCategories: [
      {
        id: 'early-bird',
        name: 'Early Bird',
        price: 39.99,
        description: 'Limited early bird tickets at a special price',
        available: 0,
        total: 100,
        enabled: true,
        endDate: '2024-07-15'
      },
      {
        id: 'regular',
        name: 'Regular',
        price: 49.99,
        description: 'Standard admission ticket',
        available: 150,
        total: 400,
        enabled: true
      },
      {
        id: 'vip',
        name: 'VIP Access',
        price: 99.99,
        description: 'VIP treatment with exclusive backstage access',
        available: 25,
        total: 50,
        enabled: true
      }
    ]
  }
];