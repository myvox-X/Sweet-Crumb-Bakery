import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, ShoppingCart, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

type CategoryType = 'all' | 'cakes' | 'cupcakes' | 'donuts' | 'cookies' | 'pastries';

export default function Menu({ onAddToCart, onQuickView }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('default');

  const categories: { key: CategoryType; label: string; icon: string }[] = [
    { key: 'all', label: 'All Confections', icon: '✨' },
    { key: 'cakes', label: 'Cakes', icon: '🍰' },
    { key: 'cupcakes', label: 'Cupcakes', icon: '🧁' },
    { key: 'donuts', label: 'Donuts', icon: '🍩' },
    { key: 'cookies', label: 'Cookies', icon: '🍪' },
    { key: 'pastries', label: 'Pastries', icon: '🥐' },
  ];

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category (Custom items belong to cakes/custom. Here we exclude custom tier cake if categorized)
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort Products
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-brand-cream-dark/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <span className="font-serif text-brand-accent font-bold text-lg italic block">Our Menu</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
            Explore Sweet Treasures
          </h2>
          <p className="text-sm text-brand-brown-light font-medium">
            Every creation is prepared on-premise using standard traditional baking practices, zero preservatives, and premium chocolates.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-6 mb-12">
          {/* Categories Grid/Scroller */}
          <div className="flex overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none justify-start md:justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                id={`cat-tab-${cat.key}`}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full font-display font-bold text-sm tracking-wide whitespace-nowrap transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border focus:outline-none ${
                  activeCategory === cat.key
                    ? 'bg-brand-brown border-brand-brown text-brand-cream'
                    : 'bg-brand-cream border-brand-pink/40 text-brand-brown-light hover:text-brand-brown hover:border-brand-pink-dark/50'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search and Sort Row */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-brand-cream rounded-[2rem] p-4 border border-brand-pink/30 shadow-sm">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-brown-light" />
              <input
                id="menu-search-input"
                type="text"
                placeholder="Search pastries, cakes, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-brand-cream-dark/40 border-0 focus:ring-2 focus:ring-brand-pink-hover text-sm font-medium text-brand-brown placeholder-brand-brown-light focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-brand-accent hover:text-brand-brown"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sorting & Stats Info */}
            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-brand-pink/30">
              <span className="text-xs text-brand-brown-light font-bold">
                Showing {filteredProducts.length} sweets
              </span>

              <div className="flex items-center space-x-2">
                <ArrowUpDown className="w-4 h-4 text-brand-brown-light" />
                <select
                  id="menu-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-brand-cream-dark/40 border-0 text-brand-brown text-xs rounded-full py-2.5 pl-3 pr-8 focus:ring-2 focus:ring-brand-pink-hover font-bold focus:outline-none cursor-pointer"
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Popularity Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Display Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={product.id}
                    id={`menu-card-${product.id}`}
                    className="bg-brand-cream rounded-[2.5rem] p-5 border border-brand-pink/20 hover:border-brand-pink-hover/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group custom-shadow-soft relative"
                  >
                    {/* Floating Corner Details */}
                    {product.badge && (
                      <span className="absolute top-6 left-6 z-10 px-3 py-1 text-[10px] font-display font-extrabold tracking-wider uppercase text-brand-brown bg-brand-pink-dark rounded-full shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    <div className="space-y-4">
                      {/* Image Container */}
                      <div className="relative rounded-2xl overflow-hidden aspect-video bg-brand-cream flex items-center justify-center border border-brand-pink/10 cursor-pointer"
                        onClick={() => onQuickView(product)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-brand-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="bg-brand-cream text-brand-brown text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                            View Details
                          </span>
                        </div>
                      </div>

                      {/* Header and Rating */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-display font-bold tracking-wider uppercase text-brand-accent bg-brand-pink px-2.5 py-0.5 rounded-full">
                            {product.category}
                          </span>
                          <div className="flex items-center text-amber-500 text-xs font-bold">
                            <Star className="w-3.5 h-3.5 fill-current mr-0.5" />
                            <span>{product.rating}</span>
                            <span className="text-brand-brown-light font-medium ml-1">
                              ({product.reviewsCount})
                            </span>
                          </div>
                        </div>

                        <h3 className="font-display font-bold text-xl text-brand-brown group-hover:text-brand-accent transition-colors leading-snug">
                          {product.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-brand-brown-light leading-relaxed font-medium line-clamp-2">
                        {product.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {product.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-brand-cream-dark/50 text-brand-brown-light px-2 py-0.5 rounded-full font-bold"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer price & purchase */}
                    <div className="pt-4 border-t border-brand-pink/30 mt-4 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-brand-brown-light font-bold">Price</span>
                        <span className="font-display text-xl font-bold text-brand-brown">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      <button
                        id={`menu-add-to-cart-${product.id}`}
                        onClick={() => onAddToCart(product)}
                        className="px-5 py-2.5 rounded-full bg-brand-pink hover:bg-brand-brown text-brand-brown hover:text-white font-display font-bold text-xs flex items-center space-x-2 transition-all duration-300 shadow-sm focus:outline-none cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Empty State
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 px-4 bg-brand-cream rounded-[2rem] border border-dashed border-brand-pink-dark/40 max-w-md mx-auto"
              >
                <span className="text-5xl block mb-4">🧁🔍</span>
                <h3 className="font-display font-bold text-lg text-brand-brown mb-1">
                  No Sweet Treats Found
                </h3>
                <p className="text-xs text-brand-brown-light mb-6 font-medium">
                  We couldn't find any confections matching "{searchQuery}". Try selecting another category or resetting filters!
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-5 py-2.5 rounded-full bg-brand-brown text-brand-cream font-display font-bold text-xs shadow-md hover:bg-brand-accent transition-colors focus:outline-none"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
