import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ArrowLeft, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'interior' | 'products' | 'custom' | 'celebrations'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs: { key: typeof activeTab; label: string }[] = [
    { key: 'all', label: 'All Photos' },
    { key: 'products', label: 'Sweet Creation Closeups' },
    { key: 'interior', label: 'Cozy Interior' },
    { key: 'custom', label: 'Custom Cakes' },
    { key: 'celebrations', label: 'Sweet Occasions' },
  ];

  // Filter gallery items
  const filteredGallery = GALLERY.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const handleOpenLightbox = (imageSrc: string) => {
    // Find index of image in the currently filtered list
    const index = filteredGallery.findIndex((item) => item.image === imageSrc);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
    }
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-brand-cream-dark/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <span className="font-serif text-brand-accent font-bold text-lg italic block">Sweet Moments</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
            Our Dessert Gallery
          </h2>
          <p className="text-sm text-brand-brown-light font-medium">
            Take a visual tour through our boutique interior, customized celebration cakes, and close-up artisanal details.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              id={`gallery-tab-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-brand-brown border-brand-brown text-white shadow-md'
                  : 'bg-brand-cream border-brand-pink/30 text-brand-brown-light hover:text-brand-brown hover:border-brand-pink-dark/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => handleOpenLightbox(item.image)}
                className={`group rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-brand-pink/15 ${item.widthClass}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Hover overlay with maximize icon and text */}
                <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                    <span className="text-[10px] uppercase font-display font-extrabold text-brand-pink-dark tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="font-display font-bold text-white text-base leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Full screen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-brown/95 backdrop-blur-md">
            {/* Dark background close listener */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxIndex(null)} />

            {/* Close Button */}
            <button
              id="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50 cursor-pointer"
              title="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              id="lightbox-prev-btn"
              onClick={handlePrevLightbox}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50 cursor-pointer"
              title="Previous photo"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              id="lightbox-next-btn"
              onClick={handleNextLightbox}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-50 cursor-pointer"
              title="Next photo"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Active image container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] px-4 z-10 flex flex-col items-center"
            >
              <img
                src={filteredGallery[lightboxIndex].image}
                alt={filteredGallery[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              {/* Caption details bottom */}
              <div className="text-center mt-4 space-y-1">
                <h4 className="font-display font-bold text-white text-lg">
                  {filteredGallery[lightboxIndex].title}
                </h4>
                <p className="text-xs text-brand-pink-dark font-extrabold uppercase tracking-wider">
                  Category: {filteredGallery[lightboxIndex].category}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
