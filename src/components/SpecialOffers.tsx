import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Sparkles, Copy, Check, Clock } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data';

export default function SpecialOffers() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="offers" className="py-20 md:py-28 bg-brand-cream relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-10 text-3xl animate-float-slow opacity-25">🧁</div>
      <div className="absolute bottom-1/4 right-10 text-3xl animate-float opacity-20">🍒</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="font-serif text-brand-accent font-bold text-lg italic block">Sweet Deals</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
            Special Baking Offers
          </h2>
          <p className="text-sm text-brand-brown-light font-medium">
            Take advantage of our exclusive seasonal packages, celebrations discounts, and afternoon cozy combo deals!
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              id={`offer-card-${offer.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`rounded-[2.5rem] p-6 border border-brand-pink/30 hover:border-brand-pink-dark/50 ${offer.color} shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden group`}
            >
              {/* Corner Ribbon Detail */}
              <div className="absolute top-0 right-0 bg-brand-accent text-white py-1 px-4 text-[10px] font-display font-bold tracking-widest uppercase rounded-bl-2xl">
                {offer.badge}
              </div>

              <div className="space-y-4">
                {/* Visual Circle Backdrop */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">
                  {offer.id === 'o1' ? '🌸' : offer.id === 'o2' ? '🎂' : '☕'}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-brand-brown leading-snug group-hover:text-brand-accent transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-brown-light leading-relaxed font-medium">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Offer Footer with Copy Button */}
              <div className="pt-6 border-t border-brand-pink-dark/15 mt-6 space-y-4">
                {/* Countdown display */}
                <div className="flex items-center space-x-2 text-xs text-brand-brown-light font-bold">
                  <Clock className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Expires in: {offer.expiresInDays} days</span>
                </div>

                {/* Promo Code Block */}
                <div className="flex items-center justify-between bg-white rounded-2xl p-2 pl-4 border border-brand-pink/30">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-brand-brown-light font-extrabold uppercase tracking-wider">
                      Promo Coupon
                    </span>
                    <span className="font-mono text-xs font-extrabold text-brand-brown tracking-wider">
                      {offer.discountCode}
                    </span>
                  </div>

                  <button
                    id={`copy-offer-btn-${offer.id}`}
                    onClick={() => handleCopyCode(offer.id, offer.discountCode)}
                    className="p-2.5 rounded-xl bg-brand-pink hover:bg-brand-pink-dark text-brand-brown transition-all duration-200 flex items-center justify-center relative focus:outline-none cursor-pointer"
                    title="Copy code to clipboard"
                  >
                    <AnimatePresence mode="wait">
                      {copiedId === offer.id ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                        >
                          <Check className="w-4 h-4 text-green-600" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                        >
                          <Copy className="w-4 h-4 text-brand-brown-light" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gift Box Custom consultation Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-brand-pink to-brand-accent-light/40 rounded-[2.5rem] p-6 md:p-8 border border-brand-pink-dark/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center space-x-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-3xl shadow-sm mb-3 md:mb-0 animate-float-slow">
              🎁
            </div>
            <div>
              <h4 className="font-display font-extrabold text-lg text-brand-brown flex items-center justify-center md:justify-start gap-1.5">
                <span>Planning a custom celebration?</span>
                <Sparkles className="w-4 h-4 text-brand-accent" />
              </h4>
              <p className="text-xs sm:text-sm text-brand-brown-light font-semibold mt-0.5">
                Get a free consultation for weddings, sweet sixteens, and anniversary custom catering!
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-brand-brown hover:bg-brand-brown-dark text-white font-display font-bold text-xs shadow-md transition-all duration-300 whitespace-nowrap"
          >
            Inquire Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
