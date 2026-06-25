import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Twitter, Heart, Send, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-brown-dark text-brand-cream pt-16 pb-8 border-t-4 border-brand-pink-dark/40 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-1/4 text-2xl opacity-15 animate-float">✨</div>
      <div className="absolute bottom-10 left-10 text-xl opacity-15 animate-float-slow">🧁</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-brand-cream/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-brand-pink-dark flex items-center justify-center text-lg shadow-sm">
                🧁
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white block">
                  Sweet Crumbs
                </span>
                <span className="font-serif text-[9px] text-brand-pink-dark tracking-[0.2em] uppercase block -mt-1">
                  Bakery & Desserts
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-cream/70 leading-relaxed font-medium">
              We make freshly baked happiness every single day. Specializing in elegant custom cakes, buttery slow-proofed croissants, and gourmet cupcakes built with premium organic ingredients and organic local milk.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-pink-dark text-brand-cream hover:text-brand-brown flex items-center justify-center transition-all duration-300"
                title="Instagram page"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-pink-dark text-brand-cream hover:text-brand-brown flex items-center justify-center transition-all duration-300"
                title="Facebook page"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-pink-dark text-brand-cream hover:text-brand-brown flex items-center justify-center transition-all duration-300"
                title="Twitter page"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href="#reviews"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-pink-dark text-brand-cream hover:text-brand-brown flex items-center justify-center transition-all duration-300"
                title="Sweet reviews"
              >
                <Heart className="w-4.5 h-4.5 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase text-white tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs text-brand-cream/70 font-semibold">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-brand-pink-dark transition-colors">
                Home Showcase
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-brand-pink-dark transition-colors">
                About our Story
              </a>
              <a href="#menu" onClick={(e) => handleNavClick(e, '#menu')} className="hover:text-brand-pink-dark transition-colors">
                Sweet Menu
              </a>
              <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-brand-pink-dark transition-colors">
                Photo Gallery
              </a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')} className="hover:text-brand-pink-dark transition-colors">
                Praise & Reviews
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-brand-pink-dark transition-colors">
                Connect Contact
              </a>
            </nav>
          </div>

          {/* Column 3: Newsletter Sign-Up */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase text-white tracking-wider">
              Baking Newsletter
            </h4>
            <p className="text-xs text-brand-cream/70 font-medium leading-relaxed">
              Subscribe to receive weekly coupon discount codes, early announcements for our seasonal menus, and artisan baking tips!
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="yourname@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-white placeholder-brand-cream/40 focus:outline-none focus:ring-1 focus:ring-brand-pink-dark focus:border-brand-pink-dark"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-brand-pink-dark hover:bg-brand-pink-hover text-brand-brown font-display font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2 text-xs font-bold text-brand-pink-dark py-2.5"
                >
                  <CheckCircle className="w-4.5 h-4.5 text-brand-pink-dark" />
                  <span>Subscribed! Welcome to the Sweet Crumbs Club.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Base Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream/40 font-semibold text-center sm:text-left">
          <p>© 2026 Sweet Crumbs Bakery. Freshly baked in New York. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-brand-pink-dark transition-colors">Privacy Statement</a>
            <span>•</span>
            <a href="#terms" className="hover:text-brand-pink-dark transition-colors">Baking Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
