import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { eventService } from '../services/eventService';
import { EventCard } from '../components/EventCard/EventCard';

export const SearchResults = () => {
  const { searchQuery } = useSearch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';

  const searchResults = eventService.searchEvents(query);

  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 gradient-text">
          Search Results for "{query}"
        </h1>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No results found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};