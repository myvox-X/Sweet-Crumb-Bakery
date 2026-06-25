import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, PlusCircle, Check, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data';
import { Review } from '../types';

export default function Testimonials() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [showForm, setShowForm] = useState(false);
  
  // New review state
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const newReview: Review = {
      id: `r-user-${Date.now()}`,
      name: newName,
      role: newRole || 'Sweet Crumbs Guest',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150', // placeholder friendly portrait
      rating: newRating,
      comment: newComment,
      date: 'Just now',
      verified: true
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      // Reset form fields
      setNewName('');
      setNewRole('');
      setNewRating(5);
      setNewComment('');
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-brand-cream relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 right-10 text-3xl opacity-20 animate-float-rotate">🧁</div>
      <div className="absolute bottom-10 left-10 text-3xl opacity-20 animate-float-slow">✨</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="font-serif text-brand-accent font-bold text-lg italic block">Sweet Praise</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
            Loved by Sweet Teeth
          </h2>
          <p className="text-sm text-brand-brown-light font-medium">
            Hear from our wonderful community of cake lovers, pastry critics, and daily coffee stopping friends!
          </p>
        </div>

        {/* Action Button: Toggle Write Review Form */}
        <div className="flex justify-center mb-12">
          {!showForm ? (
            <button
              id="write-review-toggle-btn"
              onClick={() => setShowForm(true)}
              className="px-6 py-3 rounded-full bg-brand-pink hover:bg-brand-pink-dark text-brand-brown font-display font-bold text-xs flex items-center space-x-2 shadow-sm transition-colors focus:outline-none cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-brand-accent" />
              <span>Share Your Sweet Experience</span>
            </button>
          ) : null}
        </div>

        {/* Leave a Review Form (Collapsible container) */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-md mx-auto mb-16 bg-brand-cream-dark/20 border border-brand-pink-hover/40 rounded-[2.5rem] p-6 md:p-8 overflow-hidden relative"
            >
              {!submitted ? (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-brand-pink/30">
                    <h3 className="font-display font-bold text-sm text-brand-brown uppercase tracking-wider">
                      Write a Review
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="text-xs font-bold text-brand-brown-light hover:text-brand-brown"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-brand-brown block">My Name</label>
                      <input
                        type="text"
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Sophie L."
                        className="w-full px-4 py-2 rounded-full bg-white border border-brand-pink/20 text-xs font-medium text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-accent placeholder-brand-brown-light"
                      />
                    </div>

                    {/* Role */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-brand-brown block">My Role (Optional)</label>
                      <input
                        type="text"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        placeholder="Local Customer"
                        className="w-full px-4 py-2 rounded-full bg-white border border-brand-pink/20 text-xs font-medium text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-accent placeholder-brand-brown-light"
                      />
                    </div>
                  </div>

                  {/* Rating Selector */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-brown block">Rating</label>
                    <div className="flex space-x-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="focus:outline-none cursor-pointer"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= newRating ? 'text-amber-500 fill-current' : 'text-brand-brown-light/30'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-brand-brown block">My Review Comments</label>
                    <textarea
                      required
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Tell us what you loved about our cakes or pastries..."
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white border border-brand-pink/20 text-xs font-medium text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-accent placeholder-brand-brown-light resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-user-review"
                    type="submit"
                    className="w-full py-3 rounded-full bg-brand-brown hover:bg-brand-brown-dark text-white font-display font-bold text-xs tracking-wide transition-colors shadow-md focus:outline-none cursor-pointer"
                  >
                    Submit Review
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center text-green-600 border border-brand-pink-dark">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-brand-brown">
                      Thank You!
                    </h4>
                    <p className="text-xs text-brand-brown-light font-medium mt-1">
                      Your sweet words have been posted. We appreciate you!
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.map((review, idx) => (
            <motion.div
              key={review.id}
              id={`review-card-${review.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-brand-cream-dark/15 rounded-[2.5rem] p-6 sm:p-8 border border-brand-pink/20 hover:border-brand-pink-dark/40 hover:bg-white custom-shadow-soft transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote quotation graphic */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-pink-dark/20" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex space-x-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-amber-500 fill-current' : 'text-brand-brown-light/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Body Text */}
                <p className="text-xs sm:text-sm text-brand-brown-light leading-relaxed italic font-medium">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-brand-pink/30 mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-pink/30 flex-shrink-0 flex items-center justify-center bg-brand-pink">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-brand-brown flex items-center gap-1">
                    <span>{review.name}</span>
                    {review.verified && (
                      <span className="text-brand-accent text-xs" title="Verified Sweets Lover">
                        <Check className="w-3.5 h-3.5 inline stroke-[3]" />
                      </span>
                    )}
                  </h4>
                  <p className="text-[10px] text-brand-brown-light font-semibold">
                    {review.role}
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
