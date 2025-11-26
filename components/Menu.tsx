import React, { useState } from 'react';
import { Category } from '../types';
import { MENU_ITEMS } from '../constants';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.COFFEE);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-800/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-wider uppercase text-sm">Discover Our Flavors</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">Our Menu</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-stone-900 shadow-[0_0_20px_rgba(197,160,40,0.3)]'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-stone-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-stone-700 hover:border-gold-500/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
                <div className="absolute bottom-3 right-3 bg-gold-500 text-stone-900 font-bold text-sm px-3 py-1 rounded-lg shadow-lg">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-serif">{item.name}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-gold-400 border-b border-gold-400 pb-1 hover:text-white hover:border-white transition-colors uppercase text-sm tracking-widest">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;