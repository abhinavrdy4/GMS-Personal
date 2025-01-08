import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Instagram } from 'lucide-react';

interface BannerSlideProps {
  image: string;
  title: string;
  subtitle: string;
  location: string;
  locationUrl?: string;
  instagramStoryUrl?: string;
  categories: string[];
  path: string;
  type: 'workshop' | 'class';
}

export const BannerSlide = ({ 
  image, 
  title, 
  subtitle,
  location,
  locationUrl,
  instagramStoryUrl,
  categories,
  path,
  type
}: BannerSlideProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-w-full h-full relative flex-shrink-0">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map(category => (
                <span key={category} className="px-4 py-1.5 rounded-full glass-card text-sm font-medium">
                  {category}
                </span>
              ))}
              <span className="px-4 py-1.5 rounded-full glass-card text-sm font-medium capitalize">
                {type}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 
                         leading-tight">
              {title}
            </h2>
            <div className="flex flex-wrap gap-4 text-white/90 mb-6 text-sm sm:text-base">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {subtitle}
              </div>
              {locationUrl ? (
                <a
                  href={locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  {location}
                </a>
              ) : (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  {location}
                </div>
              )}
              {instagramStoryUrl && (
                <a
                  href={instagramStoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">View Story</span>
                </a>
              )}
            </div>
            <button
              onClick={() => navigate(path)}
              className="w-full sm:w-auto btn btn-primary bg-white/20 hover:bg-white/30 backdrop-blur-sm
                       border border-white/30 shadow-lg hover:shadow-xl transform 
                       hover:-translate-y-0.5 transition-all duration-300
                       text-base"
            >
              {type === 'workshop' ? 'Book Now' : 'Join Class'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};