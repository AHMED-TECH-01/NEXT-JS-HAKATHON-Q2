export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  isNew?: boolean;
  colors?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  material?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}