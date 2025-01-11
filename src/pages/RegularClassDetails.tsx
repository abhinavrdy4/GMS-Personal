import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  MapPin, Users, Share2, Heart,
  GraduationCap, Sparkles, ChevronDown, ChevronUp
} from 'lucide-react';
import { eventService } from '../services/eventService';
import { ScheduleDisplay } from '../components/RegularClass/ScheduleDisplay';
import { SubscriptionPlans } from '../components/RegularClass/SubscriptionPlans';

export const RegularClassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const classDetails = id ? eventService.getRegularClassById(Number(id)) : undefined;

  if (!classDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Class Not Found</h2>
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

  const handleSubscribe = (planId: string) => {
    console.log('Selected plan:', planId);
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={classDetails.image}
          alt={classDetails.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              {classDetails.categories.map(category => (
                <span key={category} className="px-4 py-1.5 rounded-full glass-card text-sm font-medium">
                  {category}
                </span>
              ))}
              <span className="px-4 py-1.5 rounded-full glass-card text-sm font-medium">
                {classDetails.level}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {classDetails.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              {classDetails.locationUrl ? (
                <a
                  href={classDetails.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  {classDetails.location}
                </a>
              ) : (
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {classDetails.location}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {classDetails.attendees}/{classDetails.maxCapacity} enrolled
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
              <button className="p-3 rounded-lg glass-card hover:bg-white/40 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
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
              <h2 className="text-2xl font-bold mb-4">About This Class</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {classDetails.description}
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-purple-50">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                  <div>
                    <h4 className="font-medium">Experience Level</h4>
                    <p className="text-sm text-gray-600">{classDetails.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-purple-50">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <div>
                    <h4 className="font-medium">Class Size</h4>
                    <p className="text-sm text-gray-600">Max {classDetails.maxCapacity} students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Class Schedule</h2>
              <ScheduleDisplay schedule={classDetails.schedule} />
            </div>

            {/* Requirements & Amenities */}
            {(classDetails.requirements || classDetails.amenities) && (
              <div className="glass-card rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {classDetails.requirements && (
                    <div>
                      <h3 className="text-lg font-bold mb-4">What You'll Need</h3>
                      <ul className="space-y-2">
                        {classDetails.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {classDetails.amenities && (
                    <div>
                      <h3 className="text-lg font-bold mb-4">Amenities</h3>
                      <ul className="space-y-2">
                        {classDetails.amenities.map((amenity, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* FAQs */}
            {classDetails.faqs && (
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  {classDetails.faqs.map(({ question, answer }, index) => (
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

          {/* Right Column - Subscription Plans */}
          <div className="lg:w-[400px]">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>
              <SubscriptionPlans
                plans={classDetails.subscriptionPlans}
                onSelectPlan={handleSubscribe}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};