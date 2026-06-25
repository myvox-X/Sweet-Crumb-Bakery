import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShoppingCart, Info, ShieldAlert, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductQuickView({ product, onClose, onAddToCart }: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      setQuantity(1);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-brown/55 backdrop-blur-xs">
        {/* Backdrop listener */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-zoom-out"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-brand-cream w-full max-w-2xl rounded-[3rem] border border-brand-pink/40 shadow-2xl overflow-hidden relative z-50"
        >
          {/* Close button */}
          <button
            id="quick-view-close-btn"
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-brand-cream hover:bg-brand-pink text-brand-brown transition-colors z-20 shadow-md focus:outline-none cursor-pointer"
            title="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="relative aspect-square bg-brand-cream border-r border-brand-pink/15">
              {product.badge && (
                <span className="absolute top-6 left-6 z-10 px-3 py-1.5 text-[10px] font-display font-extrabold tracking-wider uppercase text-brand-brown bg-brand-pink-dark rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info side */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Category & Stars */}
                <div className="flex items-center justify-between text-xs font-extrabold">
                  <span className="uppercase text-brand-accent tracking-widest font-display bg-brand-pink px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span>{product.rating}</span>
                    <span className="text-brand-brown-light font-medium ml-1">
                      ({product.reviewsCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Name & price */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-2xl text-brand-brown leading-tight">
                    {product.name}
                  </h3>
                  <p className="font-display text-xl font-bold text-brand-brown">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-brown-light leading-relaxed font-semibold">
                  {product.description}
                </p>

                {/* Allergen advisory / ingredients box */}
                <div className="p-3.5 rounded-2xl bg-brand-pink/35 border border-brand-pink/20 space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-[10px] text-brand-brown font-extrabold uppercase tracking-wide">
                    <ShieldAlert className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>Baker's Allergy Note</span>
                  </div>
                  <p className="text-[10px] text-brand-brown-light leading-relaxed font-medium">
                    Baked in a facility that handles tree nuts, gluten, sesame, and dairy. Gluten-free and vegan alternatives can be custom arranged upon consultation request.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {product.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-brand-cream-dark/60 text-brand-brown-light px-2.5 py-0.5 rounded-full font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Counter and CTA button row */}
              <div className="pt-6 border-t border-brand-pink/25 mt-6 flex items-center justify-between gap-4">
                {/* Quantity adjustments */}
                <div className="flex items-center space-x-3.5">
                  <button
                    onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                    className="w-8 h-8 rounded-full bg-brand-cream-dark/50 hover:bg-brand-pink flex items-center justify-center text-brand-brown focus:outline-none"
                  >
                    -
                  </button>
                  <span className="font-display font-extrabold text-sm text-brand-brown select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-full bg-brand-cream-dark/50 hover:bg-brand-pink flex items-center justify-center text-brand-brown focus:outline-none"
                  >
                    +
                  </button>
                </div>

                {/* Primary Button */}
                <button
                  id="quick-view-add-btn"
                  onClick={handleAdd}
                  disabled={added}
                  className="flex-grow py-3 rounded-full bg-brand-brown hover:bg-brand-brown-dark text-white font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 shadow-md focus:outline-none disabled:bg-green-600 disabled:opacity-90 cursor-pointer"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Sweetly Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 text-brand-pink-dark" />
                      <span>Add To Cart - ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
