import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Clock, Users, Share2, Heart,
  Facebook, Twitter, Linkedin, Mail,
  ChevronDown, ChevronUp, Ticket, Info
} from 'lucide-react';
import { getEventById } from '../data/events';

export const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const event = getEventById(Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Event Not Found</h2>
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

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium mb-4">
              {event.categories?.[0] || event.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {event.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {event.location}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {event.attendees} attending
              </div>
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
              <button className="flex-1 btn btn-primary">
                <Ticket className="w-5 h-5 mr-2" />
                Get Tickets
              </button>
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
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
            </div>

            {/* Schedule */}
            {event.schedule && (
              <div className="glass-card rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
                <div className="space-y-4">
                  {event.schedule.map(({ time, activity }, index) => (
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

            {/* FAQs */}
            {event.faqs && (
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  {event.faqs.map(({ question, answer }, index) => (
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
          <div className="lg:w-80">
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-bold">Ticket Price</h3>
                <span className="text-2xl font-bold text-purple-600">{event.price}</span>
              </div>
              <button className="w-full btn btn-primary mb-6">
                <Ticket className="w-5 h-5 mr-2" />
                Get Tickets
              </button>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Location</h4>
                  <p className="text-gray-700">{event.location}</p>
                </div>
                {event.accessibility && (
                  <div>
                    <h4 className="font-medium mb-2">Accessibility</h4>
                    <p className="text-gray-700">{event.accessibility}</p>
                  </div>
                )}
                {(event.instructor || event.contact || event.organizer) && (
                  <div>
                    <h4 className="font-medium mb-2">Contact Information</h4>
                    <div className="text-gray-700">
                      {event.instructor && <p>Instructor: {event.instructor}</p>}
                      {event.contact && <p>Contact: {event.contact}</p>}
                      {event.organizer && (
                        <>
                          <p>{event.organizer.name}</p>
                          <p>{event.organizer.email}</p>
                          <p>{event.organizer.phone}</p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};