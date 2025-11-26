import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-gold-400 font-bold tracking-wider uppercase text-sm">Visual Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">Our Ambience</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-stone-400 hover:text-gold-400 transition-colors mt-4 md:mt-0">
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {GALLERY_IMAGES.map((src, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden rounded-xl ${
                idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif italic text-lg tracking-wider">Velvet Brew</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
            <button className="flex items-center gap-2 text-stone-400 hover:text-gold-400 transition-colors">
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;