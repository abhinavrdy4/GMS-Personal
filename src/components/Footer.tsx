import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Instagram, Facebook, 
  Clock, ChevronRight 
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1a2f1c] to-[#0f1b11] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">GoodMoveStudios</h3>
            <p className="text-gray-300 mb-4">
              Discover the joy of dance and movement at Bangalore's premier dance studio. 
              Join our vibrant community of dancers and express yourself through various dance forms.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/goodmovestudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#927b45] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/goodmovestudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#927b45] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: 'Workshops', path: '/category/Workshops' },
                { text: 'Regular Classes', path: '/regulars' },
                { text: 'Dance Classes', path: '/category/Dance' },
                { text: 'Kids Classes', path: '/category/Kids' },
                { text: 'Fitness Classes', path: '/category/Fitness' }
              ].map((link) => (
                <li key={link.text}>
                  <Link 
                    to={link.path}
                    className="flex items-center text-gray-300 hover:text-[#927b45] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://g.co/kgs/BYH4hS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-[#927b45] transition-colors"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>80 Feet Road, Koramangala, opposite Pasta Street, Bangalore</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#927b45] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@goodmovestudios.in"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#927b45] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@goodmovestudios.in
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Studio Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p>7:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p>8:00 AM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} GoodMoveStudios. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-[#927b45] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#927b45] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};