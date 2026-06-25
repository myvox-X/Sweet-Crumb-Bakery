import { motion } from 'motion/react';
import { Heart, Sparkles, Droplet } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-cream-dark/40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-brand-pink/20 filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-brand-accent-light/30 filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Image (Bakery Cozy Interior) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white aspect-video md:aspect-4/3 z-10"
              >
                <img
                  src="/src/assets/images/bakery_cozy_interior_1782378145122.jpg"
                  alt="Cozy interior of Sweet Crumbs Bakery with pastel walls and wooden furniture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlapping small detail photo or graphic */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-10 -right-4 sm:-right-8 w-2/5 aspect-square bg-brand-pink-dark rounded-3xl overflow-hidden border-4 border-white shadow-lg hidden sm:block z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300"
                  alt="Baker kneading fresh bread dough"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>

              {/* Years/Heart Stamp badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="absolute -top-6 -left-6 bg-brand-accent text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-white z-20 animate-float"
              >
                <span className="font-display font-extrabold text-lg leading-none">Est.</span>
                <span className="font-serif font-bold text-xl leading-none">2018</span>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Story & Values */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-serif text-brand-accent font-bold text-lg italic block"
              >
                Our Story
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight"
              >
                Rolled with Love, <br />
                <span className="text-brand-accent font-serif italic font-normal">Baked with Joy</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-brand-brown-light font-medium text-sm sm:text-base leading-relaxed"
            >
              <p>
                Sweet Crumbs Bakery started as a little girl's sketchbook dream of icing flowers and sugary clouds. Founded in 2018 in the cozy heart of the Blossom District, we set out to create a whimsical pastry boutique where every dessert tells an enchanting story.
              </p>
              <p>
                We believe that baking is a form of artful therapy. That's why we never rush. From whipping our signature light meringues to proofing our slow-rise croissant dough over three days, our team of passionate pastry chefs crafts each delicate confection by hand, ensuring perfection down to the final crumb.
              </p>
            </motion.div>

            {/* Principles Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-pink-dark/25"
            >
              {/* Principle 1 */}
              <div className="flex items-start space-x-3 p-1">
                <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-brown">100% Homemade</h4>
                  <p className="text-xs text-brand-brown-light mt-0.5">No artificial mixes, ever.</p>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="flex items-start space-x-3 p-1">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Droplet className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-brown">Pure Butter</h4>
                  <p className="text-xs text-brand-brown-light mt-0.5">Rich premium European dairy.</p>
                </div>
              </div>

              {/* Principle 3 */}
              <div className="flex items-start space-x-3 p-1">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-brown">Fresh Berries</h4>
                  <p className="text-xs text-brand-brown-light mt-0.5">Sourced from local farms daily.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
