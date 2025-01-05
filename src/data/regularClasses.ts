import type { RegularClass } from '../types/events';

export const regularClasses: RegularClass[] = [
  {
    id: 101,
    type: 'regular',
    title: 'Yoga Flow & Meditation',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1500&q=80',
    categories: ['Wellness', 'Workshops'],
    location: 'Mindful Living Studio, 123 Serenity Lane',
    attendees: 45,
    maxCapacity: 60,
    description: 'Join our transformative Yoga Flow & Meditation classes designed to enhance your physical strength, flexibility, and mental clarity.',
    level: 'All Levels',
    instructor: {
      name: 'Sarah Mitchell',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80',
      bio: 'Certified yoga instructor with 10+ years of experience in mindfulness and meditation practices.',
      expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Breathwork']
    },
    schedule: {
      days: ['Tuesday', 'Thursday', 'Saturday'],
      timeSlots: [
        { start: '07:00', end: '08:15' },
        { start: '18:30', end: '19:45' }
      ],
      frequency: 'Weekly'
    },
    requirements: [
      'Comfortable workout clothes',
      'Yoga mat (rentals available)',
      'Water bottle'
    ],
    amenities: [
      'Changing rooms',
      'Shower facilities',
      'Mat storage',
      'Filtered water station'
    ],
    subscriptionPlans: [
      {
        id: 'monthly-basic',
        name: 'Monthly Basic',
        price: 89,
        interval: 'monthly',
        description: 'Perfect for regular practitioners',
        features: [
          'Unlimited access to scheduled classes',
          'Basic amenities access',
          'Online community access',
          'Class recordings for 24 hours'
        ]
      },
      {
        id: 'quarterly-premium',
        name: 'Quarterly Premium',
        price: 239,
        interval: 'quarterly',
        description: 'Best value for dedicated yogis',
        features: [
          'All Basic features',
          'Two guest passes per month',
          'Priority booking',
          'Extended recordings access (7 days)',
          '10% off workshops'
        ],
        popular: true
      }
    ],
    reviews: [
      {
        id: 1,
        userName: 'Emma Thompson',
        rating: 5,
        comment: 'Sarah is an incredible instructor! Perfect balance of challenge and relaxation.',
        date: '2024-03-10',
        userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
      }
    ]
  }
];