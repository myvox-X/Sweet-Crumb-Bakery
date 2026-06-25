import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Heart, Award } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onOrderNow: () => void;
}

export default function Hero({ onExploreMenu, onOrderNow }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 flex items-center bg-radial from-brand-pink/50 via-brand-cream to-brand-cream overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-pink/40 filter blur-3xl opacity-60 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-brand-accent-light/50 filter blur-3xl opacity-60 animate-float pointer-events-none" />

      {/* Floating Small Elements for the 'Cute' Vibe */}
      <div className="absolute top-1/5 right-1/2 text-2xl animate-float opacity-30 pointer-events-none">🌸</div>
      <div className="absolute bottom-1/4 left-10 text-3xl animate-float-slow opacity-25 pointer-events-none">✨</div>
      <div className="absolute top-1/3 right-12 text-3xl animate-float-rotate opacity-20 pointer-events-none">🍩</div>
      <div className="absolute bottom-1/5 right-1/3 text-2xl animate-float opacity-25 pointer-events-none">🍪</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-pink border border-brand-pink-dark/30 text-brand-brown shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span className="font-display text-xs sm:text-sm font-semibold tracking-wide">
                Boutique Pastry & Cake Studio
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-brown leading-tight tracking-tight"
              >
                Freshly Baked <br />
                <span className="relative inline-block text-brand-accent italic font-serif font-normal">
                  Happiness
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-pink-dark rounded-full" />
                </span>{' '}
                Every Day
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-brand-brown-light max-w-lg mx-auto lg:mx-0 font-medium"
              >
                Delicious cakes, cupcakes, pastries, and artisanal desserts made with love, organic ingredients, and a pinch of stardust.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero-order-now-btn"
                onClick={onOrderNow}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-brown hover:bg-brand-brown-dark text-brand-cream font-display font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 group focus:outline-none"
              >
                <span>Order Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-pink hover:bg-brand-pink-dark text-brand-brown font-display font-bold text-base transition-all duration-300 border border-brand-pink-dark/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 focus:outline-none"
              >
                <span>Explore Menu</span>
              </button>
            </motion.div>

            {/* Quick Badges / Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-brand-pink-dark/25"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start text-brand-accent mb-1">
                  <Award className="w-5 h-5 mr-1" />
                  <span className="font-display font-bold text-brand-brown text-lg">5★</span>
                </div>
                <p className="text-xs text-brand-brown-light font-medium">Top Rated Bakery</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start text-brand-accent mb-1">
                  <Heart className="w-5 h-5 mr-1" />
                  <span className="font-display font-bold text-brand-brown text-lg">100%</span>
                </div>
                <p className="text-xs text-brand-brown-light font-medium">Handmade with Love</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start text-brand-accent mb-1 flex-shrink-0">
                  <span className="text-lg">🌿</span>
                </div>
                <p className="text-xs text-brand-brown-light font-medium">Organic Ingredients</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Showcase */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-pink-dark via-brand-accent/30 to-brand-pink-dark rounded-[2.5rem] filter blur-md opacity-70 animate-pulse-subtle pointer-events-none" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-brand-cream border-4 border-white aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 flex items-center justify-center">
                <img
                  src="/src/assets/images/hero_bakery_showcase_1782378104171.jpg"
                  alt="Sweet Crumbs Bakery display showcasing delicious fresh desserts"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Float Overlays */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-4 top-10 sm:top-16 glass-panel rounded-2xl p-3 sm:p-4 shadow-lg border border-white flex items-center space-x-3 max-w-[200px] animate-float"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                  🍰
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-brand-brown leading-tight">Princess Cake</h4>
                  <p className="text-[10px] text-brand-brown-light font-semibold">Today's Special</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-4 bottom-8 glass-panel rounded-2xl p-3 sm:p-4 shadow-lg border border-white flex items-center space-x-3 max-w-[200px] animate-float-slow"
              >
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-xl">
                  🧁
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-brand-brown leading-tight">Daily Fresh</h4>
                  <p className="text-[10px] text-brand-brown-light font-semibold">Fresh From Oven</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
