import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Music2, Palette, Mic2, HeartHandshake, Camera, Music4, Repeat } from 'lucide-react';
import { categories } from '../data/categories';

export const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: typeof categories[0]) => {
    if (category.type === 'class') {
      navigate('/regulars');
    } else {
      navigate(`/category/${category.name}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className="group relative flex flex-col items-center p-4 rounded-xl transition-all glass-card
                     hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                     hover:bg-white/90"
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} p-3.5 mb-3 
              shadow-lg group-hover:shadow-xl transition-all duration-300 
              group-hover:scale-110 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              <category.icon className="w-full h-full text-white drop-shadow-md" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};