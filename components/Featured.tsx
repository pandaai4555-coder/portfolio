import React from 'react';
import { Star } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

const Featured: React.FC = () => {
  const featuredItems = MENU_ITEMS.filter(item => item.featured).slice(0, 3);

  return (
    <section className="py-24 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-wider uppercase text-sm">Chef's Selection</span>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 font-bold mt-2">Signature Bestsellers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredItems.map((item, index) => (
            <div key={item.id} className={`relative flex flex-col items-center ${index === 1 ? 'md:-mt-8' : ''}`}>
              {index === 1 && (
                <div className="absolute -top-12 z-10 bg-gold-500 text-stone-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}
              <div className="w-full bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center px-4 pb-4">
                  <div className="flex justify-center gap-1 mb-3 text-gold-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-2">{item.name}</h3>
                  <p className="text-stone-500 mb-4">{item.description}</p>
                  <span className="text-xl font-bold text-gold-600 block">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;