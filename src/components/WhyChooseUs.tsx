import { motion } from 'motion/react';
import { Sparkles, Heart, Gift, Truck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-accent animate-pulse-subtle" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-brand-accent" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-brand-accent" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-brand-accent" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-accent" />;
    }
  };

  const getBackgroundClass = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-rose-50';
      case 1:
        return 'bg-orange-50';
      case 2:
        return 'bg-amber-50/70';
      case 3:
        return 'bg-red-50';
      default:
        return 'bg-rose-50';
    }
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-24 bg-brand-cream-dark/20 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-pink/20 filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="font-serif text-brand-accent font-bold text-lg italic block">Our Standards</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
            Why Choose Sweet Crumbs
          </h2>
          <p className="text-sm text-brand-brown-light font-medium">
            We are dedicated to bringing you the highest culinary and aesthetic standards. Here is how we ensure sweet perfection.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.title}
              id={`why-card-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-cream border border-brand-pink/20 rounded-[2.5rem] p-6 sm:p-8 hover:shadow-lg hover:border-brand-pink-dark/40 transition-all duration-300 relative text-center md:text-left flex flex-col justify-between items-center md:items-start"
            >
              <div className="space-y-4">
                {/* Beautiful icon holder with pastel color backdrop */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xs mx-auto md:mx-0 ${getBackgroundClass(idx)}`}>
                  {getIcon(item.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-brand-brown">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-brown-light leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
