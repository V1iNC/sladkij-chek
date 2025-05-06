export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular: boolean;
  weight?: string;
  ingredients?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  bonusPoints: number;
  level: UserLevel;
  orders: Order[];
}

export interface UserLevel {
  name: string;
  minPoints: number;
  discount: number;
  icon: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: string;
  bonusPointsEarned: number;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

export interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: number;
  startDate: string;
  endDate: string;
  conditions?: string[];
}