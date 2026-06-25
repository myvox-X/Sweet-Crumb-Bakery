import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Menu from './components/Menu';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductQuickView from './components/ProductQuickView';
import { CartItem, Product } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('sweet_crumbs_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Sync Cart to Local Storage
  useEffect(() => {
    localStorage.setItem('sweet_crumbs_cart', JSON.stringify(cart));
  }, [cart]);

  // Handle Active Section on Scroll
  useEffect(() => {
    const sections = ['home', 'about', 'menu', 'gallery', 'reviews', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height and margin
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Handlers
  const handleAddToCart = (product: Product, qty: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex !== -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [...prevCart, { product, quantity: qty }];
      }
    });
    // Open Cart drawer for immediate visual feedback unless custom quick view handles it
    if (qty === 1) {
      setIsCartOpen(true);
    }
  };

  const handleUpdateQuantity = (productId: string, change: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + change;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div id="bakery-portfolio-app" className="min-h-screen bg-brand-cream text-brand-brown font-sans flex flex-col justify-between selection:bg-brand-pink-dark selection:text-brand-brown">
      
      {/* Sticky Navigation bar */}
      <Navbar
        cartCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Showcase */}
        <Hero
          onExploreMenu={() => handleScrollToId('menu')}
          onOrderNow={() => handleScrollToId('menu')}
        />

        {/* Brand Story & values */}
        <About />

        {/* Featured Signature cakes & treats */}
        <Featured
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setSelectedProduct(p)}
        />

        {/* Comprehensive Interactive Menu */}
        <Menu
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setSelectedProduct(p)}
        />

        {/* Special Offers Coupon cards */}
        <SpecialOffers />

        {/* Interactive Gallery layout */}
        <Gallery />

        {/* Why choose us standards */}
        <WhyChooseUs />

        {/* Happy customer reviews */}
        <Testimonials />

        {/* Contact info and Inquiry Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Cart Drawer (Right-slide-out sidebar) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Quick View Detail Modal */}
      <ProductQuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
