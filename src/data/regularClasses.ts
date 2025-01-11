import type { RegularClass } from '../types/events';

export const regularClasses: RegularClass[] = [
  {
    id: 101,
    type: 'regular',
    title: 'Semi-classical',
    image: 'https://storage.googleapis.com/cityvibe/IMG_9661.PNG?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance'],
    location: 'Good Move Studios',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    featured: true,
    description: 'Discover the beauty of Semi-Classical dance, a captivating fusion of traditional Indian classical styles and contemporary movements. This class offers a perfect balance of grace, expression, and rhythm, making it accessible to dancers of all levels. Learn intricate footwork, fluid hand gestures, and storytelling techniques while exploring a variety of music, from classical melodies to modern tunes. Ideal for those looking to blend tradition with creativity, this class nurtures artistic expression and celebrates the rich cultural heritage of dance. Join us to move, connect, and express yourself in a dynamic and supportive environment!',
    level: 'All Levels',
    // instructor: {
    //   name: 'Sarah Mitchell',
    //   image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80',
    //   bio: 'Certified yoga instructor with 10+ years of experience in mindfulness and meditation practices.',
    //   expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Breathwork']
    // },
    schedule: {
      weekday: {
        days: ['Monday', 'Wednesday', 'Friday'],
        timeSlots: [
          { start: '07:00', end: '08:15' },
          { start: '18:30', end: '19:45' }
        ]
      },
      weekend: {
        days: ['Saturday', 'Saturday'],
      timeSlots: [
        { start: '11:00', end: '12:00' }
      ]
      },
      frequency: 'Weekly'
    },
    requirements: [
      'Comfortable ethnic clothes',
      'Water bottle'
    ],
    amenities: [
      'Changing rooms',
      'Filtered water.'
    ],
    faqs: [
      {
        question: 'What if I\'m a complete beginner?',
        answer: 'Our classes are designed for all levels.'
      }
    ],
    subscriptionPlans: [
      {
        id: 'monthly-basic',
        name: 'Monthly Basic',
        price: 3400,
        interval: 'monthly',
        description: 'Perfect for exploring interest',
        features: [
          'All Basic features',
          // 'Basic amenities access',
          // 'Online community access',
          // 'Class recordings for 24 hours'
        ]
      },
      {
        id: 'quarterly-premium',
        name: 'Quarterly Premium',
        price: 8500,
        interval: 'quarterly',
        description: 'Best value for dedicated dancers',
        features: [
          'All Basic features',
          'Mark holidays',
          '17% off workshops'
        ],
        popular: true
      }
    ]
  },
  {
    id: 102,
    type: 'regular',
    title: 'Dance Fusion',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance', 'Fitness'],
    location: 'Good Move Studios',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    featured: false,
    description: 'Discover the beauty of Semi-Classical dance, a captivating fusion of traditional Indian classical styles and contemporary movements. This class offers a perfect balance of grace, expression, and rhythm, making it accessible to dancers of all levels. Learn intricate footwork, fluid hand gestures, and storytelling techniques while exploring a variety of music, from classical melodies to modern tunes. Ideal for those looking to blend tradition with creativity, this class nurtures artistic expression and celebrates the rich cultural heritage of dance. Join us to move, connect, and express yourself in a dynamic and supportive environment!',
    level: 'Beginner',
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday'],
      timeSlots: [
        { start: '17:30', end: '18:45' },
        { start: '19:00', end: '20:15' }
      ],
      frequency: 'Weekly'
    },
    faqs: [
      {
        question: 'Do I need dance experience?',
        answer: 'No prior experience needed! Our classes are designed for beginners.'
      },
      {
        question: 'What should I wear?',
        answer: 'Comfortable clothing that allows movement and clean indoor shoes.'
      },
      {
        question: 'Can I join mid-month?',
        answer: 'Yes, we offer pro-rated pricing for mid-month joins.'
      }
    ],
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
    ]
  }
];