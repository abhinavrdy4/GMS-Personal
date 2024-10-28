import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BannerSlide } from './BannerSlide';
import { BannerControls } from './BannerControls';

const bannerData = [
  {
    id: 1,
    title: 'Summer Music Festival 2024',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1500&q=80',
    date: 'August 15, 2024',
    location: 'Central Park Amphitheater',
  },
  {
    id: 2,
    title: 'Art & Wine Evening',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1500&q=80',
    date: 'August 18, 2024',
    location: 'Downtown Gallery',
  },
  {
    id: 3,
    title: 'Paiya Dei by Bharath',
    image: 'https://storage.googleapis.com/cityvibe/IMG_8640.PNG?auto=format&fit=crop&w=1500&q=80',
    date: 'August 20, 2024',
    location: 'Good Move Studios',
  },
  {
    id: 4,
    title: 'Photography Masterclass',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1500&q=80',
    date: 'August 22, 2024',
    location: 'Creative Studio',
  },
  {
    id: 5,
    title: 'Bhangra Masterclass',
    image: 'https://storage.googleapis.com/cityvibe/IMG_8633.PNG?auto=format&fit=crop&w=1500&q=80',
    date: 'August 22, 2024',
    location: 'Good Move Studios',
  },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerData.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (slideRef.current && touchStart) {
      const diff = touchStart - e.targetTouches[0].clientX;
      if (Math.abs(diff) > 5) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const diff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[calc(100vh-4rem)] max-h-[600px] min-h-[400px] overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        ref={slideRef}
        className="flex h-full w-full transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerData.map((slide) => (
          <BannerSlide
            key={slide.id}
            image={slide.image}
            title={slide.title}
            date={slide.date}
            location={slide.location}
            eventId={slide.id}
          />
        ))}
      </div>

      <BannerControls
        currentIndex={currentIndex}
        totalSlides={bannerData.length}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onDotClick={setCurrentIndex}
      />
    </div>
  );
};