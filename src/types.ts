export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'cakes' | 'cupcakes' | 'donuts' | 'cookies' | 'pastries' | 'custom';
  image: string;
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
  badge?: string;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  specialInstructions?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discountCode: string;
  discountPercentage: number;
  badge: string;
  expiresInDays: number;
  image: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'products' | 'custom' | 'celebrations';
  image: string;
  widthClass: string; // for masonry grid layouts
  heightClass: string;
}
