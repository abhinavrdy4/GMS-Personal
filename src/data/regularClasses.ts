import type { RegularClass } from '../types/events';

export const regularClasses: RegularClass[] = [
  {
    id: 101,
    type: 'regular',
    title: 'Yoga Flow & Meditation',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1500&q=80',
    categories: ['Wellness', 'Yoga'],
    location: 'Mindful Living Studio, 123 Serenity Lane',
    featured: true,
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
  },
  {
    id: 102,
    type: 'regular',
    title: 'Dance Fusion',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance', 'Fitness'],
    location: 'Rhythm Studio, 456 Beat Street',
    featured: true,
    attendees: 28,
    maxCapacity: 40,
    description: 'Experience the joy of dance with our high-energy fusion classes combining multiple dance styles.',
    level: 'Beginner',
    instructor: {
      name: 'Michael Rodriguez',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Professional dancer with expertise in multiple dance styles.',
      expertise: ['Hip Hop', 'Latin Dance', 'Contemporary', 'Jazz']
    },
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday'],
      timeSlots: [
        { start: '17:30', end: '18:45' },
        { start: '19:00', end: '20:15' }
      ],
      frequency: 'Weekly'
    },
    subscriptionPlans: [
      {
        id: 'monthly',
        name: 'Monthly Pass',
        price: 79,
        interval: 'monthly',
        description: 'Unlimited dance classes',
        features: [
          'Access to all regular classes',
          'Basic amenities',
          'One guest pass per month'
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        userName: 'Sophie Chen',
        rating: 5,
        comment: 'Such a fun way to stay fit! Michael makes every class exciting.',
        date: '2024-03-12'
      }
    ]
  }
];