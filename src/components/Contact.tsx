import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Heart } from 'lucide-react';
import { BAKERY_CONTACT_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear fields
      setName('');
      setEmail('');
      setMessage('');
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="font-serif text-brand-accent font-bold text-lg italic block">Say Hello</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-brown tracking-tight">
            Connect with Our Bakery
          </h2>
          <p className="text-sm text-brand-brown-light font-medium">
            Have questions about customized orders, wedding events, or ingredients? Fill out the form or drop by for fresh tea!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Side (Column 1) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            {/* Quick Contacts Cards */}
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-xl text-brand-brown mb-6">
                Bakery Information
              </h3>

              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-cream-dark/20 border border-brand-pink/20">
                <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-brand-brown-light font-bold uppercase tracking-wider">Give us a Call</h4>
                  <a href={`tel:${BAKERY_CONTACT_INFO.phone}`} className="text-sm font-display font-bold text-brand-brown hover:text-brand-accent transition-colors">
                    {BAKERY_CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-cream-dark/20 border border-brand-pink/20">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-brand-brown-light font-bold uppercase tracking-wider">Send an Email</h4>
                  <a href={`mailto:${BAKERY_CONTACT_INFO.email}`} className="text-sm font-display font-bold text-brand-brown hover:text-brand-accent transition-colors break-all">
                    {BAKERY_CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-cream-dark/20 border border-brand-pink/20">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-brand-brown-light font-bold uppercase tracking-wider">Visit our Shop</h4>
                  <p className="text-sm font-display font-bold text-brand-brown leading-tight">
                    {BAKERY_CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours list */}
            <div className="p-6 rounded-[2.5rem] bg-brand-pink/40 border border-brand-pink-dark/20 space-y-4">
              <div className="flex items-center space-x-2 text-brand-brown">
                <Clock className="w-5 h-5 text-brand-accent" />
                <h4 className="font-display font-bold text-base">Opening & Oven Hours</h4>
              </div>

              <div className="space-y-2.5">
                {BAKERY_CONTACT_INFO.hours.map((hour) => (
                  <div key={hour.days} className="flex justify-between items-center text-xs font-semibold border-b border-brand-pink-dark/10 pb-2 last:border-0 last:pb-0">
                    <span className="text-brand-brown">{hour.days}</span>
                    <span className="text-brand-brown-light font-mono bg-white px-2.5 py-1 rounded-full shadow-2xs">
                      {hour.times}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side (Column 2) */}
          <div className="lg:col-span-7 bg-brand-cream-dark/25 rounded-[3rem] p-6 sm:p-8 md:p-10 border border-brand-pink/20 shadow-sm relative flex flex-col justify-between overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-1.5">
                    <h3 className="font-display font-extrabold text-xl text-brand-brown">
                      Drop us a Sweet Note
                    </h3>
                    <p className="text-xs text-brand-brown-light font-medium">
                      Fill out the details below and we will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-brand-brown block">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-full bg-white border border-brand-pink/25 focus:ring-1 focus:ring-brand-accent focus:outline-none text-sm font-medium text-brand-brown"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-brand-brown block">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="yourname@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-full bg-white border border-brand-pink/25 focus:ring-1 focus:ring-brand-accent focus:outline-none text-sm font-medium text-brand-brown"
                        />
                      </div>
                    </div>

                    {/* Subject selection */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-brown block">Subject Inquiry</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-full bg-white border border-brand-pink/25 focus:ring-1 focus:ring-brand-accent focus:outline-none text-sm font-bold text-brand-brown cursor-pointer"
                      >
                        <option value="General Inquiry">General Bakery Inquiry</option>
                        <option value="Custom Birthday Cake">Custom Birthday Cake Quote</option>
                        <option value="Wedding / Catering Consultation">Wedding & Event Catering</option>
                        <option value="Dietary Options">Dietary / Allergen Questions</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-brown block">My Message</label>
                      <textarea
                        required
                        placeholder="Tell us what you are looking for..."
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-3xl bg-white border border-brand-pink/25 focus:ring-1 focus:ring-brand-accent focus:outline-none text-sm font-medium text-brand-brown resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-brown hover:bg-brand-brown-dark text-white font-display font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer focus:outline-none disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Baking Message...' : 'Send Sweet Note'}</span>
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  </button>
                </motion.form>
              ) : (
                // Success Response Card
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-pink flex items-center justify-center text-brand-accent border border-brand-pink-dark">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-brand-brown">
                      Note Transmitted!
                    </h3>
                    <p className="text-xs text-brand-accent font-bold font-serif italic mt-0.5">
                      We've caught your message and are dusting off our aprons.
                    </p>
                    <p className="text-sm text-brand-brown-light max-w-sm mx-auto mt-3 font-medium leading-relaxed">
                      Thank you for connecting! One of our sweet specialists will respond to your inquiry via email shortly. Have a truly wonderful day!
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-brand-pink hover:bg-brand-pink-dark text-brand-brown font-display font-bold text-xs transition-colors focus:outline-none cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
