import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export const BannerControls = ({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick,
}: BannerControlsProps) => {
  return (
    <>
      {/* Navigation Arrows - Hidden on smaller screens */}
      <div className="hidden sm:flex absolute inset-y-0 left-0 items-center">
        <button
          onClick={onPrevious}
          className="touch-target m-2 sm:m-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm
                   border border-white/30 shadow-lg hover:shadow-xl transform 
                   hover:-translate-x-0.5 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <div className="hidden sm:flex absolute inset-y-0 right-0 items-center">
        <button
          onClick={onNext}
          className="touch-target m-2 sm:m-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm
                   border border-white/30 shadow-lg hover:shadow-xl transform 
                   hover:translate-x-0.5 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots Navigation - Larger on mobile for better touch targets */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-2.5 sm:h-2 rounded-full transition-all duration-300 touch-target
                     ${currentIndex === index 
                       ? 'bg-white w-8 sm:w-6' 
                       : 'bg-white/50 hover:bg-white/70 w-2.5 sm:w-2'}`}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>
    </>
  );
};