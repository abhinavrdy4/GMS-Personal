import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { TicketCategory } from '../types/events';

interface TicketCategoriesProps {
  categories: TicketCategory[];
  onSelectTicket: (categoryId: string) => void;
}

export const TicketCategories: React.FC<TicketCategoriesProps> = ({
  categories,
  onSelectTicket,
}) => {
  const hasAvailableTickets = categories.some(category => category.enabled);

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

  const handleTicketSelect = (category: TicketCategory) => {
    if (category.bookingLink) {
      window.open(category.bookingLink, '_blank', 'noopener,noreferrer');
    } else {
      onSelectTicket(category.id);
    }
  };

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const isDisabled = !category.enabled;

        return (
          <div
            key={category.id}
            className={`relative rounded-xl transition-all duration-300 ${
              isDisabled
                ? 'opacity-75 bg-gray-100'
                : 'glass-card hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
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
                    ₹{category.price}
                  </div>
                  {category.endDate && (
                    <div className="text-sm text-gray-500">
                      Until {new Date(category.endDate).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                {!category.enabled ? (
                  <div className="w-full py-2 px-4 bg-gray-100 text-gray-500 rounded-lg text-center font-medium">
                    Currently Unavailable
                  </div>
                ) : (
                  <button
                    onClick={() => handleTicketSelect(category)}
                    className="w-full btn btn-primary"
                  >
                    Select Tickets
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};