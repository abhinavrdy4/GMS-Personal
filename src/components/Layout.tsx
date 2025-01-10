import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Menu, X } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100">
      <nav className="fixed top-0 w-full glass-card shadow-lg z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent
                         hover:opacity-80 transition-opacity"
              >
                GoodMoveStudios
              </button>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-64 pl-10 pr-4 py-2 rounded-full bg-white/30 border border-white/40 focus:outline-none 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200
                           placeholder-gray-500 hover:bg-white/40"
                />
              </div>
              <button className="p-2 rounded-full hover:bg-white/30 relative transition-colors">
                <Bell className="h-6 w-6 text-gray-700" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-pink-500 rounded-full"></span>
              </button>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-white/30 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-card border-t border-white/30 py-4 px-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/30 border border-white/40 focus:outline-none 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/40"
              />
            </div>
            <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-white/30 rounded-lg">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </button>
          </div>
        )}
      </nav>
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};