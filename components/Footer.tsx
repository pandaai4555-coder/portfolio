import React from 'react';
import { Coffee, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Coffee className="h-6 w-6 text-gold-500" />
            <span className="font-serif text-xl font-bold text-white tracking-wider">Velvet Brew</span>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#!" className="hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#!" className="hover:text-gold-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#!" className="hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} Velvet Brew Café. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;