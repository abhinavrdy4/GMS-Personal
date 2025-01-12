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
    maxCapacity: 20,
    description: 'Discover the beauty of Semi-Classical dance, a captivating fusion of traditional Indian classical styles and contemporary movements. This class offers a perfect balance of grace, expression, and rhythm, making it accessible to dancers of all levels. Learn intricate footwork, fluid hand gestures, and storytelling techniques while exploring a variety of music, from classical melodies to modern tunes. Ideal for those looking to blend tradition with creativity, this class nurtures artistic expression and celebrates the rich cultural heritage of dance. Join us to move, connect, and express yourself in a dynamic and supportive environment!',
    level: 'All Levels',
    // instructor: {
    //   name: 'Sarah Mitchell',
    //   image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80',
    //   bio: 'Certified yoga instructor with 10+ years of experience in mindfulness and meditation practices.',
    //   expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Breathwork']
    // },
    schedule: {
      batches: [
        {
          name: "Morning Batch",
          days: ['Monday', 'Wednesday', 'Friday'],
          timeSlots: [
            { start: '07:00', end: '08:15' },
            { start: '09:00', end: '10:15' }
          ]
        },
        {
          name: "Weekend Batch",
          days: ['Saturday', 'Saturday'],
          timeSlots: [
            { start: '11:00', end: '12:00' }
          ]
        }
      ],
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
        ],
        bookingLink: 'https://example.com/yoga/quarterly-premium'
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
        popular: true,
        bookingLink: 'https://example.com/yoga/quarterly-premium'
      }
    ]
  },
  {
    id: 102,
    type: 'regular',
    title: 'Bollywood',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance'],
    location: 'Good Move Studios',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    featured: false,
    description: 'Dive into the electrifying world of Modern Bollywood dance! This high-energy class blends the vibrant rhythms of Bollywood with dynamic moves from hip-hop, contemporary, and other global styles. Perfect for beginners and dance enthusiasts alike, you will learn expressive choreography that fuses traditional Indian flair with modern grooves. Whether you are looking to unleash your inner performer or just have fun, this class promises a creative, upbeat, and unforgettable experience!',
    level: 'Beginner',
    maxCapacity: 20,
    schedule: {
      batches: [
        {
          name: "Morning Batch",
          days: ['Monday', 'Wednesday'],
          timeSlots: [
            { start: '07:00', end: '08:15' },
            { start: '09:00', end: '10:15' }
          ]
        },
        {
          name: "Weekend Batch",
          days: ['Saturday', 'Saturday'],
          timeSlots: [
            { start: '11:00', end: '12:00' }
          ]
        }
      ],
      frequency: 'Weekly'
    },
    faqs: [
      {
        question: 'What is the relevant age group?',
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
  },
  {
  id: 103,
    type: 'regular',
    title: 'Kathak',
    image: 'https://storage.googleapis.com/cityvibe/IMG_9661.PNG?auto=format&fit=crop&w=1500&q=80',
    categories: ['Dance'],
    location: 'Good Move Studios',
    locationUrl: 'https://g.co/kgs/BYH4hS8',
    description: 'Step into the enchanting world of Kathak, a classical Indian dance form celebrated for its graceful spins, intricate footwork, and expressive storytelling. In this class, you will learn the fundamentals of rhythm, hand gestures (mudras), and emotive expressions (abhinaya), all set to traditional and modern compositions. Perfect for beginners and those seeking to deepen their cultural connection, this class offers a beautiful journey into the art of Kathak!',
    maxCapacity: 30,
    level: 'All Levels',
    // instructor: {
    //   name: 'Sarah Mitchell',
    //   image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80',
    //   bio: 'Certified yoga instructor with 10+ years of experience in mindfulness and meditation practices.',
    //   expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Breathwork']
    // },
    schedule: {
      batches: [
        {
          name: "Weekend Batch",
          days: ['Saturday'],
          timeSlots: [
            { start: '3:00 PM', end: '4:30 PM' }
          ]
        }
      ],
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
        ],
        bookingLink: 'https://example.com/yoga/quarterly-premium'
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
        popular: true,
        bookingLink: 'https://example.com/yoga/quarterly-premium'
      }
    ]
  },
  {
    id: 104,
      type: 'regular',
      title: 'Kids Regular Classes',
      image: 'https://storage.googleapis.com/cityvibe/IMG_9661.PNG?auto=format&fit=crop&w=1500&q=80',
      categories: ['Dance', 'Kids'],
      location: 'Good Move Studios',
      locationUrl: 'https://g.co/kgs/BYH4hS8',
      description: '',
      maxCapacity: 10,
      level: 'Beginner',
      // instructor: {
      //   name: 'Sarah Mitchell',
      //   image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=300&q=80',
      //   bio: 'Certified yoga instructor with 10+ years of experience in mindfulness and meditation practices.',
      //   expertise: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Breathwork']
      // },
      schedule: {
        batches: [
          {
            name: "Weekend Batch",
            days: ['Saturday'],
            timeSlots: [
              { start: '3:00 PM', end: '4:30 PM' }
            ]
          }
        ],
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
          ],
          bookingLink: 'https://example.com/yoga/quarterly-premium'
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
          popular: true,
          bookingLink: 'https://example.com/yoga/quarterly-premium'
        }
      ]
    }
];