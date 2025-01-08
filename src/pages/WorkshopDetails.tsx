import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Clock, Share2, Heart,
  Facebook, Twitter, Linkedin, Mail, Instagram,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { eventService } from '../services/eventService';
import { TicketCategories } from '../components/TicketCategories';

export const WorkshopDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const workshop = id ? eventService.getWorkshopById(Number(id)) : undefined;

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Workshop Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const shareLinks = [
    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Mail, label: 'Email', color: 'hover:text-red-500' }
  ];

  const handleTicketSelect = (categoryId: string) => {
    console.log('Selected ticket category:', categoryId);
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {workshop.categories.map(category => (
                <span key={category} className="px-4 py-1.5 rounded-full glass-card text-sm font-medium">
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {workshop.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {workshop.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {workshop.time}
              </div>
              {workshop.locationUrl ? (
                <a
                  href={workshop.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  {workshop.location}
                </a>
              ) : (
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {workshop.location}
                </div>
              )}
              {workshop.instagramStoryUrl && (
                <a
                  href={workshop.instagramStoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="hidden sm:inline">View Story</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <div className="relative">
                <button 
                  className="p-3 rounded-lg glass-card hover:bg-white/40 transition-colors"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                >
                  <Share2 className="w-5 h-5" />
                </button>
                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-xl z-10">
                    {shareLinks.map(({ icon: Icon, label, color }) => (
                      <button
                        key={label}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-white/40 
                                  first:rounded-t-lg last:rounded-b-lg ${color}`}
                      >
                        <Icon className="w-5 h-5" />
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                className={`p-3 rounded-lg glass-card hover:bg-white/40 transition-colors
                          ${isLiked ? 'text-pink-500' : 'text-gray-700'}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Description */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Workshop</h2>
              <p className="text-gray-700 whitespace-pre-line">{workshop.description}</p>
            </div>

            {/* Schedule */}
            {workshop.schedule && (
              <div className="glass-card rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Workshop Schedule</h2>
                <div className="space-y-4">
                  {workshop.schedule.map(({ time, activity }, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/40 transition-colors"
                    >
                      <div className="w-24 font-medium text-purple-600">{time}</div>
                      <div className="flex-1">{activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Studio Guidelines */}
            {workshop.studioGuidelines && (
              <div className="glass-card rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Studio Guidelines</h2>
                <ul className="space-y-3">
                  {workshop.studioGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs */}
            {workshop.faqs && (
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  {workshop.faqs.map(({ question, answer }, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4 text-left font-medium
                                  hover:bg-white/40 transition-colors"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        {question}
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="p-4 pt-0 text-gray-700">
                          {answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:w-[400px]">
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Select Tickets</h3>
              <TicketCategories
                categories={workshop.ticketCategories}
                onSelectTicket={handleTicketSelect}
              />

              {(workshop.locationDescription || workshop.location) && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Location</h4>
                  {workshop.locationUrl ? (
                    <a
                      href={workshop.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <MapPin className="w-5 h-5" />
                      {workshop.location}
                    </a>
                  ) : (
                    <p className="text-gray-700">{workshop.location}</p>
                  )}
                  {workshop.locationDescription && (
                    <p className="text-gray-700 mt-2">{workshop.locationDescription}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};