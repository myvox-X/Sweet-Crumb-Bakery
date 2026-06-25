import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  activeSection: string;
}

export default function Navbar({ cartCount, onCartClick, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMobileMenuOpen(false);
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md py-3 shadow-md border-b border-brand-pink/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-brand-pink-dark flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl">🧁</span>
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold text-brand-brown tracking-tight block">
              Sweet Crumbs
            </span>
            <span className="font-serif text-[10px] text-brand-brown-light tracking-[0.2em] uppercase block -mt-1">
              Bakery & Desserts
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              id={`nav-item-${item.name.toLowerCase()}`}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-display text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                activeSection === item.href.slice(1)
                  ? 'text-brand-accent'
                  : 'text-brand-brown hover:text-brand-accent'
              }`}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div id="nav-actions" className="flex items-center space-x-3 sm:space-x-4">
          {/* Wishlist Icon for visual appeal */}
          <button
            id="wishlist-btn"
            className="p-2 text-brand-brown hover:text-brand-accent hover:scale-110 transition-all duration-200 focus:outline-none hidden sm:block"
            title="My Favorites"
          >
            <Heart className="w-5 h-5" />
          </button>

          {/* Cart Trigger */}
          <button
            id="cart-trigger-btn"
            onClick={onCartClick}
            className="p-2 sm:px-4 sm:py-2 rounded-full bg-brand-pink-dark hover:bg-brand-pink-hover text-brand-brown font-display font-semibold text-sm flex items-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300 relative focus:outline-none"
            title="Open Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 text-brand-brown" />
            <span className="hidden sm:inline">Cart</span>
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  id="cart-count-badge"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-accent text-white font-sans text-xs font-bold flex items-center justify-center shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-brand-pink/50 text-brand-brown md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-cream border-b border-brand-pink/30 shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  id={`mobile-nav-item-${item.name.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`block py-3 px-4 font-display text-base font-semibold rounded-xl transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-brand-pink text-brand-accent'
                      : 'text-brand-brown hover:bg-brand-pink/20 hover:text-brand-accent'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
