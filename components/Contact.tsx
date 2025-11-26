import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <span className="text-gold-500 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="font-serif text-4xl font-bold text-coffee-900 mt-2 mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-coffee-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-coffee-700" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-coffee-900 mb-1">Location</h4>
                  <p className="text-stone-600">123 Artisan Avenue, Coffee District<br/>New York, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-coffee-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-coffee-700" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-coffee-900 mb-1">Opening Hours</h4>
                  <p className="text-stone-600">Mon - Fri: 7:00 AM - 9:00 PM</p>
                  <p className="text-stone-600">Sat - Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-coffee-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-coffee-700" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-coffee-900 mb-1">Contact</h4>
                  <p className="text-stone-600">+1 (555) 123-4567</p>
                  <a href="mailto:hello@velvetbrew.com" className="text-gold-600 hover:underline">hello@velvetbrew.com</a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map Link (Replaces Iframe to avoid connection errors) */}
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
  );
};

export default Contact;