import { Product, Review, SpecialOffer, GalleryItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'c1',
    name: 'Princess Rose Bouquet Cake',
    description: 'A luxurious vanilla chiffon cake layered with organic strawberry compote, iced with velvet rosewater buttercream, and topped with fresh pink sugar blooms.',
    price: 48.00,
    category: 'cakes',
    image: '/src/assets/images/signature_birthday_cake_1782378117034.jpg',
    rating: 4.9,
    reviewsCount: 142,
    isFeatured: true,
    isNew: true,
    badge: 'Signature',
    tags: ['Best Seller', 'Handmade', 'Chiffon']
  },
  {
    id: 'c2',
    name: 'Belgian Chocolate Truffle Cake',
    description: 'Rich, dense layers of dark Belgian chocolate sponge filled with silky espresso chocolate ganache, finished with a flawless glossy chocolate mirror glaze.',
    price: 45.00,
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewsCount: 98,
    isFeatured: true,
    tags: ['Gluten-Free Option', 'Rich Chocolate']
  },
  {
    id: 'cu1',
    name: 'Sweet Harmony Cupcake Box',
    description: 'A selection of our famous cupcakes featuring signature swirl cream cheese frostings, gold leaf speckles, edible pearls, and premium Madagascar vanilla.',
    price: 24.50,
    category: 'cupcakes',
    image: '/src/assets/images/gourmet_cupcakes_1782378130474.jpg',
    rating: 4.9,
    reviewsCount: 210,
    isFeatured: true,
    badge: 'Popular',
    tags: ['Best Seller', 'Box of 6', 'Assorted']
  },
  {
    id: 'cu2',
    name: 'Madagascar Vanilla Rose Cupcake',
    description: 'Light, fluffy vanilla bean cupcake topped with an elegant rose-piped pink white chocolate buttercream and a dash of crystal sugar.',
    price: 4.50,
    category: 'cupcakes',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    reviewsCount: 64,
    tags: ['Sweet Rose', 'Light']
  },
  {
    id: 'cu3',
    name: 'Salted Caramel Pecan Cupcake',
    description: 'Spiced brown-butter cupcake filled with soft gooey caramel, topped with velvety caramel buttercream, and toasted sea-salted pecans.',
    price: 4.75,
    category: 'cupcakes',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewsCount: 88,
    tags: ['Caramel', 'Nuts']
  },
  {
    id: 'd1',
    name: 'Strawberry Velvet Ring',
    description: 'Yeast-raised brioche donut dipped in a double-glaze of fresh organic strawberry puree, finished with hand-piped white chocolate details and crispy freeze-dried berries.',
    price: 3.95,
    category: 'donuts',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    reviewsCount: 112,
    tags: ['Double Glazed', 'Fruity']
  },
  {
    id: 'd2',
    name: 'Double Cocoa Almond Ring',
    description: 'Fluffy chocolate brioche donut filled with hazelnut cream, glazed with 70% dark chocolate, and generously coated with toasted sliced California almonds.',
    price: 4.25,
    category: 'donuts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewsCount: 75,
    tags: ['Chocolate', 'Crunchy']
  },
  {
    id: 'co1',
    name: 'Chunky Belgian Chocolate Cookie',
    description: 'Crispy golden edges with a soft, incredibly chewy center, loaded with large chunks of milk, dark, and white premium Belgian chocolate and a touch of sea salt.',
    price: 3.50,
    category: 'cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewsCount: 320,
    isFeatured: true,
    badge: 'Legendary',
    tags: ['Warm Served', 'Classic', 'Soft Center']
  },
  {
    id: 'co2',
    name: 'Pistachio Rose Macaron Sleeve',
    description: 'Exquisite French macaron shells filled with a luxurious white chocolate rose ganache and roasted ground Sicilian pistachios. Elegant box of 5.',
    price: 15.00,
    category: 'cookies',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewsCount: 134,
    tags: ['French Classic', 'Perfect Gift', 'Gluten-Free']
  },
  {
    id: 'p1',
    name: 'Almond Butter Croissant',
    description: 'Three-day proofed, double-baked butter croissant filled with sweet sweet almond frangipane, topped with toasted sliced almonds and powdered sugar.',
    price: 5.25,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    reviewsCount: 150,
    tags: ['Flaky', 'Fresh Baked Daily', 'Buttery']
  },
  {
    id: 'p2',
    name: 'Glazed Raspberry Crown Danish',
    description: 'Laminated Danish pastry with a soft custard center and tart house-made wild raspberry filling, lightly drizzled with sweet icing sugar.',
    price: 4.95,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    reviewsCount: 67,
    tags: ['Custard', 'Tart']
  },
  {
    id: 'cu4',
    name: 'Custom Dream Birthday Cake',
    description: 'Work with our master baker to create your personalized dream cake. Choose from 12 gourmet sponge flavors, custom color palettes, and handmade artistic toppings.',
    price: 120.00,
    category: 'custom',
    image: '/src/assets/images/signature_birthday_cake_1782378117034.jpg',
    rating: 5.0,
    reviewsCount: 78,
    badge: 'Made-To-Order',
    tags: ['Custom Design', 'Multi-tier Available', 'Consultation']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Sophie Laurent',
    role: 'Food Blogger & Dessert Critic',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'The Princess Rose Bouquet Cake is a masterpiece! It was almost too beautiful to eat, but the chiffon was so incredibly airy and the rosewater buttercream was so delicate. Absolutely the best bakery in town!',
    date: 'June 18, 2026',
    verified: true
  },
  {
    id: 'r2',
    name: 'Marcus Thorne',
    role: 'Local Customer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'I stop by Sweet Crumbs every morning for the Almond Butter Croissant and a latte. The flakiness is unreal—competes with some of the best patisseries I’ve visited in Paris. The staff is always so warm and sweet!',
    date: 'May 29, 2026',
    verified: true
  },
  {
    id: 'r3',
    name: 'Eleanor Vance',
    role: 'Event Coordinator',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'Sweet Crumbs created the custom birthday cake for my daughter’s sweet sixteen. Not only did they perfectly match our floral pastel theme, but it was also a massive hit among the guests. Every tier was delicious!',
    date: 'June 10, 2026',
    verified: true
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'o1',
    title: 'Midsummer Peach & Rose Fest',
    description: 'Celebrate our seasonal peach and rosewater pastries with 15% off our newly introduced floral tarts and summer cupcakes.',
    discountCode: 'SUMMERBLOOM15',
    discountPercentage: 15,
    badge: 'Seasonal Discount',
    expiresInDays: 5,
    image: '/src/assets/images/gourmet_cupcakes_1782378130474.jpg',
    color: 'bg-rose-50'
  },
  {
    id: 'o2',
    title: 'Custom Birthday Celebration Deal',
    description: 'Order any 2-tier or larger custom celebration cake and receive a free matching box of 6 gourmet vanilla bean cupcakes!',
    discountCode: 'BIRTHDAYDUET',
    discountPercentage: 20, // value representation
    badge: 'Birthday Offer',
    expiresInDays: 14,
    image: '/src/assets/images/signature_birthday_cake_1782378117034.jpg',
    color: 'bg-amber-50/70'
  },
  {
    id: 'o3',
    title: 'Sweet Crumbs Weekend Tea Combo',
    description: 'Perfect for cozy afternoons. Get 4 assorted gourmet cupcakes and 2 flaky croissants for a sweet custom price of just $22.',
    discountCode: 'AFTERNOONTEA',
    discountPercentage: 25,
    badge: 'Combo Deal',
    expiresInDays: 3,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600',
    color: 'bg-orange-50'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Cozy Bakery Interior',
    category: 'interior',
    image: '/src/assets/images/bakery_cozy_interior_1782378145122.jpg',
    widthClass: 'md:col-span-2 md:row-span-2',
    heightClass: 'h-96 md:h-[460px]'
  },
  {
    id: 'g2',
    title: 'Assorted Macaron Tier',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=600',
    widthClass: 'md:col-span-1 md:row-span-1',
    heightClass: 'h-60'
  },
  {
    id: 'g3',
    title: 'Fresh out of the Oven Croissants',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    widthClass: 'md:col-span-1 md:row-span-1',
    heightClass: 'h-60'
  },
  {
    id: 'g4',
    title: 'Premium Custom Birthday Cake',
    category: 'custom',
    image: '/src/assets/images/signature_birthday_cake_1782378117034.jpg',
    widthClass: 'md:col-span-1 md:row-span-2',
    heightClass: 'h-96 md:h-[460px]'
  },
  {
    id: 'g5',
    title: 'Cute Rose Buttercream Cupcakes',
    category: 'products',
    image: '/src/assets/images/gourmet_cupcakes_1782378130474.jpg',
    widthClass: 'md:col-span-1 md:row-span-1',
    heightClass: 'h-60'
  },
  {
    id: 'g6',
    title: 'Afternoon Dessert Buffet Setup',
    category: 'celebrations',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    widthClass: 'md:col-span-2 md:row-span-1',
    heightClass: 'h-64'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Fresh Daily',
    description: 'Our bakers rise at 3:00 AM every single morning to knead, proof, and bake everything from scratch so it meets your morning with fresh aromatic goodness.',
    icon: 'Sparkles'
  },
  {
    title: 'Premium Ingredients',
    description: 'We source only premium organic flours, Madagascar bourbon vanilla, Belgian chocolate, and locally sourced dairy. No artificial preservatives or flavorings.',
    icon: 'Heart'
  },
  {
    title: 'Custom Orders',
    description: 'Your dream dessert is our canvas. We specialize in bringing your custom design ideas, flavor preferences, and dietary needs (vegan, GF options) to life.',
    icon: 'Gift'
  },
  {
    title: 'Fast Delivery',
    description: 'Carefully hand-packaged in insulated boutique boxes and hand-delivered directly to your doorstep. We guarantee flawless presentation upon arrival.',
    icon: 'Truck'
  }
];

export const BAKERY_CONTACT_INFO = {
  phone: '+1 (555) 321-7890',
  email: 'hello@sweetcrumbsbakery.com',
  address: '142 Pastry Lane, Blossom District, NY 10014',
  hours: [
    { days: 'Monday - Friday', times: '7:00 AM - 7:00 PM' },
    { days: 'Saturday', times: '8:00 AM - 8:00 PM' },
    { days: 'Sunday', times: '8:00 AM - 4:00 PM' }
  ]
};
