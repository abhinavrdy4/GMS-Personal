import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    navigate(`/search?q=${encodeURIComponent(e.target.value)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fcfcfc] via-[#f8f9fa] to-[#f1f3f5]">
      <nav className="fixed top-0 w-full glass-card shadow-lg z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="text-2xl font-bold bg-gradient-to-r from-[#1a2f1c] via-[#927b45] to-black bg-clip-text text-transparent
                         hover:opacity-80 transition-opacity tracking-tight"
                style={{ 
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  fontFamily: 'system-ui'
                }}
              >
                GoodMoveStudios
              </button>
            </div>

            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search events..."
                  className="w-64 pl-10 pr-4 py-2 rounded-full bg-white/30 border border-white/40 focus:outline-none 
                           focus:ring-2 focus:ring-[#927b45] focus:border-transparent transition-all duration-200
                           placeholder-gray-500 hover:bg-white/40"
                />
              </div>
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
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/30 border border-white/40 focus:outline-none 
                         focus:ring-2 focus:ring-[#927b45] focus:border-transparent hover:bg-white/40"
              />
            </div>
          </div>
        )}
      </nav>
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};