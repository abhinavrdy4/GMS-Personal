import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import type { TicketCategory } from '../data/events';

interface TicketCategoriesProps {
  categories: TicketCategory[];
  onSelectTicket: (categoryId: string) => void;
}

export const TicketCategories: React.FC<TicketCategoriesProps> = ({
  categories,
  onSelectTicket,
}) => {
  const hasAvailableTickets = categories.some(
    category => category.enabled && category.available > 0
  );

  if (!hasAvailableTickets) {
    return (
      <div className="rounded-xl overflow-hidden">
        <div className="bg-red-500/10 border-2 border-red-500/20 rounded-xl p-6 text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-red-600 mb-2">Event Sold Out</h3>
          <p className="text-gray-600">
            Unfortunately, all tickets for this event have been sold out.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const isSoldOut = category.available === 0;
        const isDisabled = !category.enabled || isSoldOut;
        const availability = (category.available / category.total) * 100;
        const showUrgency = category.enabled && availability <= 20 && !isSoldOut;

        return (
          <div
            key={category.id}
            className={`relative rounded-xl transition-all duration-300 ${
              isDisabled
                ? 'opacity-75 bg-gray-100'
                : 'glass-card hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            {/* Category Header */}
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">
                    ${category.price}
                  </div>
                  {category.endDate && (
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Until {new Date(category.endDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Availability Bar */}
              {category.enabled && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">
                      {category.available} tickets remaining
                    </span>
                    <span className="text-gray-500">
                      {Math.round(availability)}% available
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        showUrgency
                          ? 'bg-gradient-to-r from-red-500 to-orange-500'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500'
                      }`}
                      style={{ width: `${availability}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-4">
                {isSoldOut ? (
                  <div className="w-full py-2 px-4 bg-gray-100 text-gray-500 rounded-lg text-center font-medium">
                    Sold Out
                  </div>
                ) : !category.enabled ? (
                  <div className="w-full py-2 px-4 bg-gray-100 text-gray-500 rounded-lg text-center font-medium">
                    Currently Unavailable
                  </div>
                ) : (
                  <button
                    onClick={() => onSelectTicket(category.id)}
                    className="w-full btn btn-primary"
                  >
                    Select Tickets
                  </button>
                )}
              </div>

              {/* Urgency Badge */}
              {showUrgency && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  Selling Fast!
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};