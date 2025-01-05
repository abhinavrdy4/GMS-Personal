import React from 'react';
import { regularClasses } from '../data/regularClasses';
import { RegularClassCard } from '../components/RegularClass/RegularClassCard';

export const CategoryClasses = () => {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Regular Classes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularClasses.map((class_) => (
            <RegularClassCard key={class_.id} classData={class_} />
          ))}
        </div>
      </div>
    </div>
  );
};