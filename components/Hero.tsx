import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="block text-gold-400 font-sans tracking-[0.2em] text-sm md:text-base mb-4 uppercase animate-fade-in-up">
          Welcome to Velvet Brew
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6 animate-fade-in-up delay-100">
          Brewed Fresh,<br />Served with Love.
        </h1>
        <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          Experience the perfect blend of artisanal coffee, cozy ambiance, and delightful flavors crafted just for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a 
            href="#menu" 
            className="bg-gold-500 hover:bg-gold-400 text-stone-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            View Menu
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#booking" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-stone-900 font-bold py-3 px-8 rounded-full transition-all"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;