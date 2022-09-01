import { nanoid } from 'nanoid';
import { CartItem } from '../types/cart.types';

export const cartItems: CartItem[] = [
  { id: nanoid(5), product: 'LG Monitor', price: 5.0, quantity: 1 },
  { id: nanoid(5), product: 'Sony Monitor', price: 8.0, quantity: 1 },
  { id: nanoid(5), product: 'HP Monitor', price: 4.0, quantity: 2 },
  { id: nanoid(5), product: 'Dell Monitor', price: 10.0, quantity: 1 },
];
