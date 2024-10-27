import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BannerSlideProps {
  image: string;
  title: string;
  date: string;
  location: string;
  eventId: number;
}

export const BannerSlide = ({ image, title, date, location, eventId }: BannerSlideProps) => {
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 
                         leading-tight">
              {title}
            </h2>
            <div className="flex flex-wrap gap-4 text-white/90 mb-6 text-sm sm:text-base">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {date}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                {location}
              </div>
            </div>
            <button
              onClick={() => navigate(`/event/${eventId}`)}
              className="w-full sm:w-auto btn btn-primary bg-white/20 hover:bg-white/30 backdrop-blur-sm
                       border border-white/30 shadow-lg hover:shadow-xl transform 
                       hover:-translate-y-0.5 transition-all duration-300
                       text-base"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};