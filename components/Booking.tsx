import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', phone: '', date: '', time: '', guests: '2' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-24 bg-coffee-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Booking Form */}
          <div className="p-10 md:w-3/5 relative">
            <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">Reserve Your Spot</span>
            <h2 className="font-serif text-3xl md:text-4xl text-coffee-900 font-bold mt-2 mb-8">Book a Table</h2>
            
            {isSubmitted ? (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-10 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-coffee-900 mb-2">Confirmed!</h3>
                <p className="text-stone-500 max-w-sm">
                  Thank you, {formState.name}. Your table for {formState.guests} people has been reserved. We've sent a confirmation SMS to your phone.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-gold-600 font-bold hover:text-gold-700 flex items-center gap-2"
                >
                  Make another reservation <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute top-3 left-3 text-stone-400 w-5 h-5" />
                    <input 
                      type="text" 
                      name="name" 
                      required
                      placeholder="Your Name" 
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute top-3 left-3 text-stone-400 w-5 h-5" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="Phone Number" 
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative">
                    <Calendar className="absolute top-3 left-3 text-stone-400 w-5 h-5" />
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formState.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute top-3 left-3 text-stone-400 w-5 h-5" />
                    <input 
                      type="time" 
                      name="time"
                      required
                      value={formState.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <select 
                      name="guests"
                      value={formState.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-stone-900 text-white font-bold py-4 rounded-lg hover:bg-stone-800 transition-colors uppercase tracking-wider"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>

          {/* Delivery CTA */}
          <div className="bg-coffee-900 p-10 md:w-2/5 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/beans/600/800')] opacity-20 bg-cover bg-center"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-3xl font-bold mb-4">Order Online</h3>
              <p className="text-stone-300 mb-8">Craving Velvet Brew at home? Order now through our delivery partners.</p>
              
              <div className="space-y-4 w-full">
                <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-colors">
                  Order on Zomato
                </button>
                <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold transition-colors">
                  Order on Swiggy
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;