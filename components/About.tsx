import React from 'react';
import { Award, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/barista/400/500" 
                alt="Barista at work" 
                className="rounded-lg shadow-xl w-full h-64 object-cover transform translate-y-8" 
              />
              <img 
                src="https://picsum.photos/seed/interior/400/500" 
                alt="Cafe interior" 
                className="rounded-lg shadow-xl w-full h-64 object-cover" 
              />
            </div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-gold-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold-500 font-bold tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 font-bold mt-2 mb-6">
              More Than Just a <br/> Cup of Coffee
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Founded in 2024, Velvet Brew started with a simple mission: to create a space where community and high-quality coffee intersect. We source our beans ethically from sustainable farms across the globe and roast them in small batches to preserve their unique character.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Whether you're here for a morning pick-me-up, a quiet afternoon of work, or a lively catch-up with friends, our warm atmosphere serves as the perfect backdrop for your daily moments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <Coffee className="w-8 h-8 text-gold-500 mb-3" />
                <h4 className="font-bold text-coffee-900">Artisan Brews</h4>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <Award className="w-8 h-8 text-gold-500 mb-3" />
                <h4 className="font-bold text-coffee-900">Master Chefs</h4>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <Heart className="w-8 h-8 text-gold-500 mb-3" />
                <h4 className="font-bold text-coffee-900">Made with Love</h4>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;