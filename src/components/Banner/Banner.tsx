import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BannerSlide } from './BannerSlide';
import { BannerControls } from './BannerControls';
import { useEvents } from '../../hooks/useEvents';
import { isWorkshop } from '../../utils/eventUtils';

export const Banner = () => {
  const { workshops, regularClasses } = useEvents();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Combine and format featured items
  const featuredItems = [
    ...workshops.slice(0, 2).map(workshop => ({
      ...workshop,
      path: `/workshop/${workshop.id}`,
      subtitle: workshop.date
    })),
    ...regularClasses.slice(0, 2).map(class_ => ({
      ...class_,
      path: `/class/${class_.id}`,
      subtitle: `${class_.schedule.frequency} Classes`
    }))
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  }, [featuredItems.length]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  }, [featuredItems.length]);

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
        {featuredItems.map((item) => (
          <BannerSlide
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            location={item.location}
            categories={item.categories}
            path={item.path}
            type={isWorkshop(item) ? 'workshop' : 'class'}
          />
        ))}
      </div>

      <BannerControls
        currentIndex={currentIndex}
        totalSlides={featuredItems.length}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onDotClick={setCurrentIndex}
      />
    </div>
  );
};