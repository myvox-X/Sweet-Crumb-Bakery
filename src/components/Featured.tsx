import { motion } from 'motion/react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface FeaturedProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export default function Featured({ onAddToCart, onQuickView }: FeaturedProps) {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);

  return (
    <section id="featured" className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Wave Divider Accent */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-brand-pink-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.05,16.32,80.19,26.38,157,57,238.16,66.85,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-brand-accent font-bold text-lg italic block"
          >
            Chef's Selections
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight"
          >
            Our Signature Confections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-brand-brown-light font-medium"
          >
            Handcrafted with meticulous detail, these signature sweet creations define the culinary heart of Sweet Crumbs Bakery.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              id={`featured-card-${product.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-brand-cream-dark/20 rounded-[2rem] p-4 border border-brand-pink/30 hover:border-brand-pink-dark/50 hover:bg-brand-cream transition-all duration-300 group custom-shadow-soft relative flex flex-col justify-between"
            >
              {/* Product Badges (Top Overlays) */}
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                {product.badge && (
                  <span className="px-3.5 py-1 text-[10px] font-display font-bold tracking-wider uppercase text-brand-brown bg-brand-pink-dark rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
                {product.isNew && (
                  <span className="px-3.5 py-1 text-[10px] font-display font-bold tracking-wider uppercase text-white bg-brand-accent rounded-full shadow-sm">
                    New
                  </span>
                )}
              </div>

              {/* Image Container with Actions Hover */}
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-brand-cream border border-brand-pink/10 mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Visual overlay on hover */}
                <div className="absolute inset-0 bg-brand-brown/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <button
                    id={`feat-quick-view-${product.id}`}
                    onClick={() => onQuickView(product)}
                    className="p-3 rounded-full bg-white text-brand-brown hover:bg-brand-pink transition-colors shadow-md focus:outline-none"
                    title="Quick View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    id={`feat-add-to-cart-${product.id}`}
                    onClick={() => onAddToCart(product)}
                    className="p-3 rounded-full bg-brand-brown text-white hover:bg-brand-accent transition-colors shadow-md focus:outline-none"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content Description */}
              <div className="space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  {/* Rating / Category */}
                  <div className="flex items-center justify-between text-xs text-brand-brown-light font-bold mb-1">
                    <span className="capitalize tracking-wider font-display">{product.category}</span>
                    <div className="flex items-center text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current mr-0.5" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-brown group-hover:text-brand-accent transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-brown-light line-clamp-2 mt-1.5 font-medium">
                    {product.description}
                  </p>
                </div>

                {/* Tags and Pricing */}
                <div className="pt-3 border-t border-brand-pink/40 mt-3">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] text-brand-brown-light bg-brand-cream-dark/50 px-2.5 py-0.5 rounded-full font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-brand-brown">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      id={`feat-btn-add-to-cart-${product.id}`}
                      onClick={() => onAddToCart(product)}
                      className="px-4 py-2 rounded-full bg-brand-pink hover:bg-brand-pink-dark text-brand-brown font-display font-bold text-xs flex items-center space-x-1.5 transition-all duration-300 focus:outline-none"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
