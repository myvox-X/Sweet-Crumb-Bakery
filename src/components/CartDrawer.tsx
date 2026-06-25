import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, Sparkles, Receipt, CheckCircle } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, change: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState('');
  const [promoError, setPromoError] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  // Cart Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal > 40 ? 0 : subtotal > 0 ? 5.99 : 0;
  const discountAmount = subtotal * (discountPercent / 100);
  const total = subtotal - discountAmount + deliveryFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();

    if (code === 'SUMMERBLOOM15') {
      setDiscountPercent(15);
      setAppliedPromo('SUMMERBLOOM15 (15% Off)');
      setPromoError('');
    } else if (code === 'BIRTHDAYDUET') {
      setDiscountPercent(20);
      setAppliedPromo('BIRTHDAYDUET (20% Off)');
      setPromoError('');
    } else if (code === 'AFTERNOONTEA') {
      setDiscountPercent(25);
      setAppliedPromo('AFTERNOONTEA (25% Off)');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try SUMMERBLOOM15!');
    }
  };

  const handleRemovePromo = () => {
    setDiscountPercent(0);
    setAppliedPromo('');
    setPromoCode('');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert('Please fill out all delivery fields');
      return;
    }
    setIsOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setIsOrderPlaced(false);
      setIsCheckoutOpen(false);
      onClose();
    }, 4500);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-brown/40 backdrop-blur-xs z-50 cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Slide-out Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="cart-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-brand-cream shadow-2xl z-50 flex flex-col justify-between border-l border-brand-pink/40"
          >
            {/* Header */}
            <div className="p-5 border-b border-brand-pink/30 flex items-center justify-between bg-brand-cream">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-brand-pink-dark flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-brand-brown" />
                </div>
                <h2 className="font-display font-bold text-lg text-brand-brown">My Sweet Cart</h2>
                <span className="bg-brand-pink px-2.5 py-0.5 rounded-full text-xs font-bold text-brand-brown">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <button
                id="cart-close-btn"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-brand-pink/50 text-brand-brown transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Contents */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    id={`cart-item-row-${item.product.id}`}
                    className="flex space-x-4 p-3 rounded-2xl bg-brand-cream-dark/20 border border-brand-pink/20 items-center justify-between"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-cream border border-brand-pink/10 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-grow min-w-0">
                      <h4 className="font-display font-bold text-sm text-brand-brown truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-brand-brown-light font-semibold">
                        ${item.product.price.toFixed(2)} each
                      </p>

                      {/* Quantity Toggler */}
                      <div className="flex items-center space-x-3 mt-1.5">
                        <button
                          id={`cart-qty-minus-${item.product.id}`}
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 rounded-full bg-white hover:bg-brand-pink border border-brand-pink/30 flex items-center justify-center text-brand-brown hover:text-brand-accent transition-colors focus:outline-none"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-display font-bold text-xs text-brand-brown select-none">
                          {item.quantity}
                        </span>
                        <button
                          id={`cart-qty-plus-${item.product.id}`}
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 rounded-full bg-white hover:bg-brand-pink border border-brand-pink/30 flex items-center justify-center text-brand-brown hover:text-brand-accent transition-colors focus:outline-none"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Delete and Row Total */}
                    <div className="flex flex-col items-end space-y-2">
                      <span className="font-display font-bold text-sm text-brand-brown">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        id={`cart-remove-item-${item.product.id}`}
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1 text-brand-brown-light hover:text-red-500 transition-colors focus:outline-none"
                        title="Delete dessert"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                  <span className="text-6xl animate-float">🧁</span>
                  <h3 className="font-display font-bold text-lg text-brand-brown mt-4">Your Cart is Empty</h3>
                  <p className="text-xs text-brand-brown-light max-w-xs mt-1 font-medium">
                    Add delicious cookies, custom cakes, and fluffy croissants from our menu to start your freshly baked happiness!
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 rounded-full bg-brand-pink hover:bg-brand-pink-dark text-brand-brown font-display font-bold text-xs shadow-md transition-colors focus:outline-none"
                  >
                    Start Browsing
                  </button>
                </div>
              )}
            </div>

            {/* Calculations & Checkout Trigger */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-brand-pink/30 bg-brand-cream space-y-4">
                {/* Promo Input */}
                <form onSubmit={handleApplyPromo} className="space-y-1.5">
                  <label className="text-[10px] text-brand-brown-light uppercase tracking-wider font-bold block">
                    Have a promo code? (e.g. SUMMERBLOOM15)
                  </label>
                  {!appliedPromo ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="SUMMERBLOOM15"
                        value={promoCode}
                        onChange={(e) => {
                          setPromoCode(e.target.value);
                          setPromoError('');
                        }}
                        className="flex-grow px-4 py-2 text-xs rounded-full bg-brand-cream-dark/40 border border-brand-pink/20 text-brand-brown placeholder-brand-brown-light focus:outline-none focus:ring-1 focus:ring-brand-pink-dark"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-full bg-brand-brown text-white font-display font-bold text-xs hover:bg-brand-accent transition-colors focus:outline-none cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between px-4 py-2 bg-brand-pink rounded-full border border-brand-pink-dark/30">
                      <div className="flex items-center space-x-2 text-xs text-brand-brown font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                        <span>{appliedPromo}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemovePromo}
                        className="text-xs font-bold text-brand-accent hover:text-brand-brown"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  {promoError && <p className="text-[10px] text-red-500 font-bold ml-1">{promoError}</p>}
                </form>

                {/* Pricing Summary */}
                <div className="space-y-2 border-t border-brand-pink/20 pt-3 text-sm">
                  <div className="flex justify-between font-medium text-brand-brown-light">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between font-bold text-brand-accent">
                      <span>Promo Discount ({discountPercent}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between font-medium text-brand-brown-light">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
                  </div>

                  {subtotal < 40 && (
                    <p className="text-[10px] text-brand-accent font-bold text-right">
                      Add ${(40 - subtotal).toFixed(2)} more for FREE delivery!
                    </p>
                  )}

                  <div className="flex justify-between font-display font-extrabold text-brand-brown text-base border-t border-brand-pink/20 pt-2.5">
                    <span>Total Amount</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  id="checkout-trigger-btn"
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-4 rounded-full bg-brand-brown hover:bg-brand-brown-dark text-brand-cream font-display font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2.5 focus:outline-none cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Proceed to Delivery</span>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkout Modal Overlay */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isOrderPlaced) setIsCheckoutOpen(false);
              }}
              className="fixed inset-0 bg-brand-brown/50 backdrop-blur-xs"
            />

            {/* Modal Form Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-brand-cream w-full max-w-lg rounded-[2.5rem] border border-brand-pink/40 shadow-2xl p-6 md:p-8 relative z-50 overflow-hidden"
            >
              {!isOrderPlaced ? (
                // Checkout Entry Form
                <form onSubmit={handlePlaceOrder} className="space-y-6">
                  <div className="flex justify-between items-center pb-3 border-b border-brand-pink/30">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🍰</span>
                      <h3 className="font-display font-bold text-lg text-brand-brown">Fresh Delivery Details</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsCheckoutOpen(false)}
                      className="p-1 rounded-full hover:bg-brand-pink text-brand-brown focus:outline-none"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Name input */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-brown block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-full bg-brand-cream-dark/30 border border-brand-pink/20 text-brand-brown placeholder-brand-brown-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent font-medium"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-brown block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-2.5 rounded-full bg-brand-cream-dark/30 border border-brand-pink/20 text-brand-brown placeholder-brand-brown-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent font-medium"
                      />
                    </div>

                    {/* Address input */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-brown block">Delivery Address</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="123 Pastry Lane, New York, NY"
                        className="w-full px-4 py-2.5 rounded-full bg-brand-cream-dark/30 border border-brand-pink/20 text-brand-brown placeholder-brand-brown-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent font-medium"
                      />
                    </div>

                    {/* Bakery instructions */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-brown block">Special Instructions / Baker Notes (Optional)</label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="E.g. 'Write Happy Birthday on the cake' or 'Leave on front porch ring doorbell'"
                        rows={2}
                        className="w-full px-4 py-2.5 rounded-2xl bg-brand-cream-dark/30 border border-brand-pink/20 text-brand-brown placeholder-brand-brown-light text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent font-medium resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary receipt box inside modal */}
                  <div className="p-4 rounded-2xl bg-brand-pink/40 border border-brand-pink/20 space-y-2">
                    <div className="flex justify-between text-xs text-brand-brown-light font-bold">
                      <span>Items Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-xs text-brand-accent font-bold">
                        <span>Discount Coupon:</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xs text-brand-brown-light font-bold">
                      <span>Delivery (Hand-delivered):</span>
                      <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-sm text-brand-brown font-extrabold border-t border-brand-pink/30 pt-2">
                      <span>Grand Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    id="submit-checkout-btn"
                    type="submit"
                    className="w-full py-4 rounded-full bg-brand-brown hover:bg-brand-brown-dark text-brand-cream font-display font-bold text-sm tracking-wide transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2.5 focus:outline-none cursor-pointer"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-pink-dark" />
                    <span>Place Fresh Baking Order</span>
                  </button>
                </form>
              ) : (
                // Success State / Bakery Receipt
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-6 flex flex-col items-center"
                >
                  {/* Rotating Cake & Sparkles */}
                  <div className="relative w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center text-4xl shadow-md border-2 border-brand-pink-dark">
                    <span>🎂</span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                      className="absolute -top-1.5 -right-1.5 text-xl"
                    >
                      ✨
                    </motion.div>
                  </div>

                  <div className="space-y-1 max-w-sm">
                    <h3 className="font-display font-extrabold text-2xl text-brand-brown">
                      Order Received!
                    </h3>
                    <p className="text-sm text-brand-accent font-bold font-serif italic">
                      Freshly baked happiness is on its way.
                    </p>
                    <p className="text-xs text-brand-brown-light font-medium mt-1">
                      Our pastry chefs are pre-heating the ovens right now! We will hand-deliver this gourmet order to you soon.
                    </p>
                  </div>

                  {/* Stylized Paper Receipt */}
                  <div className="w-full border-t-2 border-dashed border-brand-pink-dark/30 pt-4 px-2 space-y-3">
                    <div className="flex items-center justify-center space-x-1.5 text-[10px] text-brand-brown-light font-extrabold tracking-widest uppercase">
                      <Receipt className="w-3.5 h-3.5" />
                      <span>Official Bakery Receipt</span>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-brand-pink/20 text-left font-mono text-xs text-brand-brown-light space-y-1 shadow-xs">
                      <div className="flex justify-between font-bold text-brand-brown mb-1.5">
                        <span>SWEET CRUMBS INC.</span>
                        <span>#SC-{(Math.floor(Math.random() * 90000) + 10000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Baking Date:</span>
                        <span>Today</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Customer Name:</span>
                        <span className="text-brand-brown font-bold uppercase">{name}</span>
                      </div>
                      <div className="flex justify-between truncate">
                        <span>Address:</span>
                        <span className="max-w-[200px] truncate">{address}</span>
                      </div>
                      {notes && (
                        <div className="border-t border-dashed border-brand-pink/20 pt-1 mt-1 text-[10px]">
                          <span className="font-bold">Baker Notes:</span> "{notes}"
                        </div>
                      )}
                      <div className="border-t border-dashed border-brand-pink/20 pt-1.5 mt-1.5 flex justify-between font-bold text-brand-brown">
                        <span>Grand Total Paid:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-brand-brown-light font-bold animate-pulse">
                    Preheating oven... Preparing premium boxes...
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
