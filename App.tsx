import React, { useState, useEffect } from 'react';
import { 
  Menu as MenuIcon, X, Coffee, ArrowRight, Award, Heart, Star, 
  Instagram, MapPin, Clock, Phone, ExternalLink, User, Calendar, CheckCircle, Facebook, Twitter 
} from 'lucide-react';
import { MENU_ITEMS, GALLERY_IMAGES } from './constants';
import { Category } from './types';

// Main Application Component containing all page sections
function App() {
  // State for Navigation and Interactivity
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>(Category.COFFEE);
  
  // State for Booking Form
  const [formState, setFormState] = useState({ name: '', phone: '', date: '', time: '', guests: '2' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Menu
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);
  const featuredItems = MENU_ITEMS.filter(item => item.featured).slice(0, 3);

  // Handlers
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', phone: '', date: '', time: '', guests: '2' });
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      
      {/* --- NAVIGATION --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
              <Coffee className="h-8 w-8 text-gold-400 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                Velvet Brew
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-stone-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-widest hover-underline"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#booking"
                  className="bg-gold-500 hover:bg-gold-400 text-stone-900 px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30"
                >
                  Book Table
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-200 hover:text-white focus:outline-none"
              >
                {isNavOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isNavOpen ? 'max-h-96 opacity-100 bg-stone-900 shadow-xl' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsNavOpen(false)}
                className="text-stone-300 hover:text-gold-400 hover:bg-stone-800 block px-3 py-3 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsNavOpen(false)}
              className="block text-center w-full bg-gold-500 hover:bg-gold-400 text-stone-900 px-5 py-3 rounded-md font-bold mt-4 transition-colors"
            >
              Book Table
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden group">
        {/* Background Image with Zoom Effect on Load/Hover */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear transform scale-100 group-hover:scale-110"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="block text-gold-400 font-sans tracking-[0.2em] text-sm md:text-base mb-4 uppercase animate-fade-in-up">
            Welcome to Velvet Brew
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Brewed Fresh,<br />Served with Love.
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Experience the perfect blend of artisanal coffee, cozy ambiance, and delightful flavors crafted just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <a 
              href="#menu" 
              className="bg-gold-500 hover:bg-gold-400 text-stone-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              View Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#booking" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-stone-900 font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg"
            >
              Book a Table
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Images Grid with Hover Effects */}
            <div className="relative group">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/seed/barista/400/500" 
                  alt="Barista at work" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover transform translate-y-8 transition-transform duration-500 group-hover:translate-y-6" 
                />
                <img 
                  src="https://picsum.photos/seed/interior/400/500" 
                  alt="Cafe interior" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover transition-transform duration-500 group-hover:-translate-y-2" 
                />
              </div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-gold-400/20 rounded-full blur-2xl transition-opacity duration-700 group-hover:opacity-70"></div>
            </div>

            {/* Content */}
            <div>
              <span className="text-gold-500 font-bold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 font-bold mt-2 mb-6">
                More Than Just a <br/> Cup of Coffee
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Founded in 2024, Velvet Brew started with a simple mission: to create a space where community and high-quality coffee intersect. We source our beans ethically from sustainable farms across the globe and roast them in small batches.
              </p>
              
              {/* Feature Cards with Hover Lift */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: Coffee, title: "Artisan Brews" },
                  { icon: Award, title: "Master Chefs" },
                  { icon: Heart, title: "Made with Love" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-stone-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default">
                    <feature.icon className="w-8 h-8 text-gold-500 mb-3" />
                    <h4 className="font-bold text-coffee-900">{feature.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED SECTION --- */}
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
                  <div className="absolute -top-12 z-10 bg-gold-500 text-stone-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md animate-bounce">
                    Most Popular
                  </div>
                )}
                {/* Product Card with Hover Effects */}
                <div className="w-full bg-white rounded-3xl p-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="text-center px-4 pb-4">
                    <div className="flex justify-center gap-1 mb-3 text-gold-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-2 group-hover:text-gold-600 transition-colors">{item.name}</h3>
                    <p className="text-stone-500 mb-4">{item.description}</p>
                    <span className="text-xl font-bold text-gold-600 block">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section id="menu" className="py-24 bg-stone-900 text-white relative overflow-hidden">
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
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-stone-900 shadow-[0_0_20px_rgba(197,160,40,0.3)]'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-stone-800 rounded-2xl overflow-hidden border border-stone-700 transition-all duration-300 hover:border-gold-500/50 hover:shadow-xl hover:shadow-gold-900/20 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute bottom-3 right-3 bg-gold-500 text-stone-900 font-bold text-sm px-3 py-1 rounded-lg shadow-lg transform translate-y-0 group-hover:scale-110 transition-transform">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-serif group-hover:text-gold-400 transition-colors">{item.name}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="text-gold-400 border-b border-gold-400 pb-1 hover:text-white hover:border-white transition-colors uppercase text-sm tracking-widest hover:scale-105 transform">
              Download Full Menu (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section id="gallery" className="py-24 bg-stone-900 text-white border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-gold-400 font-bold tracking-wider uppercase text-sm">Visual Journey</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">Our Ambience</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-stone-400 hover:text-gold-400 transition-colors mt-4 md:mt-0 group">
              <Instagram className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Follow on Instagram
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {GALLERY_IMAGES.map((src, idx) => (
              <div 
                key={idx} 
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                  idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 blur-0 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-serif italic text-2xl tracking-wider">Velvet Brew</span>
                    <p className="text-gold-400 text-xs uppercase tracking-widest text-center mt-2">View Post</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-24 bg-coffee-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Booking Form */}
            <div className="p-10 md:w-3/5 relative">
              <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">Reserve Your Spot</span>
              <h2 className="font-serif text-3xl md:text-4xl text-coffee-900 font-bold mt-2 mb-8">Book a Table</h2>
              
              {isSubmitted ? (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-10 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-coffee-900 mb-2">Confirmed!</h3>
                  <p className="text-stone-500 max-w-sm">
                    Thank you, {formState.name}. We've sent a confirmation SMS to your phone.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-8 text-gold-600 font-bold hover:text-gold-700 flex items-center gap-2 hover:underline">
                    Make another reservation <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <User className="absolute top-3 left-3 text-stone-400 w-5 h-5 group-hover:text-gold-500 transition-colors" />
                      <input type="text" name="name" required placeholder="Your Name" value={formState.name} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                    </div>
                    <div className="relative group">
                      <Phone className="absolute top-3 left-3 text-stone-400 w-5 h-5 group-hover:text-gold-500 transition-colors" />
                      <input type="tel" name="phone" required placeholder="Phone Number" value={formState.phone} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative group">
                      <Calendar className="absolute top-3 left-3 text-stone-400 w-5 h-5 group-hover:text-gold-500 transition-colors" />
                      <input type="date" name="date" required value={formState.date} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                    </div>
                    <div className="relative group">
                      <Clock className="absolute top-3 left-3 text-stone-400 w-5 h-5 group-hover:text-gold-500 transition-colors" />
                      <input type="time" name="time" required value={formState.time} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                    </div>
                    <div className="relative">
                      <select name="guests" value={formState.guests} onChange={handleInputChange} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all appearance-none cursor-pointer hover:bg-stone-100">
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5+">5+ People</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-stone-900 text-white font-bold py-4 rounded-lg hover:bg-stone-800 transition-all uppercase tracking-wider hover:shadow-lg hover:scale-[1.01]">
                    Confirm Reservation
                  </button>
                </form>
              )}
            </div>

            {/* Delivery CTA with Hover Zoom Background */}
            <div className="bg-coffee-900 p-10 md:w-2/5 text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/beans/600/800')] opacity-20 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl font-bold mb-4">Order Online</h3>
                <p className="text-stone-300 mb-8">Craving Velvet Brew at home? Order now through our delivery partners.</p>
                <div className="space-y-4 w-full">
                  <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all hover:shadow-lg transform hover:-translate-y-1">Order on Zomato</button>
                  <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold transition-all hover:shadow-lg transform hover:-translate-y-1">Order on Swiggy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-gold-500 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
              <h2 className="font-serif text-4xl font-bold text-coffee-900 mt-2 mb-8">Visit Us</h2>
              
              <div className="space-y-8">
                {[
                  { Icon: MapPin, title: "Location", text: "123 Artisan Avenue, Coffee District\nNew York, NY 10012" },
                  { Icon: Clock, title: "Opening Hours", text: "Mon - Fri: 7:00 AM - 9:00 PM\nSat - Sun: 8:00 AM - 10:00 PM" },
                  { Icon: Phone, title: "Contact", text: "+1 (555) 123-4567" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="bg-coffee-100 p-3 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                      <item.Icon className="w-6 h-6 text-coffee-700 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-coffee-900 mb-1">{item.title}</h4>
                      <p className="text-stone-600 whitespace-pre-line">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Static Map Image Link */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=coffee+shop+new+york" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative h-[400px] bg-stone-200 rounded-2xl overflow-hidden shadow-lg border border-stone-300 block"
            >
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Map Location" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl flex items-center gap-2 text-coffee-900 font-bold group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-5 h-5" />
                  View on Google Maps
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex items-center gap-2 mb-4 md:mb-0 group cursor-default">
              <Coffee className="h-6 w-6 text-gold-500 group-hover:rotate-12 transition-transform" />
              <span className="font-serif text-xl font-bold text-white tracking-wider group-hover:text-gold-500 transition-colors">Velvet Brew</span>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#!" className="hover:text-gold-500 transition-colors hover:scale-110 transform"><Icon className="w-5 h-5" /></a>
              ))}
            </div>

            <div className="text-sm">
              &copy; {new Date().getFullYear()} Velvet Brew Café. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;