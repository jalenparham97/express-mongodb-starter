import express from 'express';
import {
  addCartItem,
  deleteCartItem,
  getCartItem,
  getCartItems,
  updateCartItem,
} from '../controllers/cart.controller';

export const cartRouter = express.Router();

cartRouter.route('/').get(getCartItems).post(addCartItem);

cartRouter
  .route('/:id')
  .get(getCartItem)
  .patch(updateCartItem)
  .delete(deleteCartItem);
