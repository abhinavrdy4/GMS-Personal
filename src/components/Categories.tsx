import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Music2, Palette, Mic2, HeartHandshake, Camera, Music4 } from 'lucide-react';

const categories = [
  { name: 'Music', icon: Music2, color: 'from-pink-500 to-rose-500', gradient: 'pink-to-rose' },
  { name: 'Art', icon: Palette, color: 'from-purple-500 to-indigo-500', gradient: 'purple-to-indigo' },
  { name: 'Poetry', icon: Mic2, color: 'from-blue-500 to-cyan-500', gradient: 'blue-to-cyan' },
  { name: 'Workshops', icon: HeartHandshake, color: 'from-green-500 to-emerald-500', gradient: 'green-to-emerald' },
  { name: 'Dance', icon: Music4, color: 'from-yellow-500 to-orange-500', gradient: 'yellow-to-orange' },
  { name: 'Photography', icon: Camera, color: 'from-red-500 to-pink-500', gradient: 'red-to-pink' },
];

export const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            onClick={() => navigate(`/category/${name}`)}
            className="group relative flex flex-col items-center p-4 rounded-xl transition-all glass-card
                     hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                     hover:bg-white/90"
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} p-3.5 mb-3 
              shadow-lg group-hover:shadow-xl transition-all duration-300 
              group-hover:scale-110 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              <Icon className="w-full h-full text-white drop-shadow-md" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};