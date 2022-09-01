import { Request, Response } from 'express';
import { nanoid } from 'nanoid'; // If you want to use nanoid you need to install version 3.3.4
import { cartItems } from '../data/cart.data';
import { CartItem } from '../types/cart.types';

export function getCartItems(req: Request, res: Response) {
  // Destructuring the properties from the query string object.
  const { maxPrice, prefix, pageSize } = req.query;
  let allCartItems = cartItems;
  // Checking if we have a maxPrice query string value.
  if (maxPrice) {
    // If we do then setting allCartItems equal to the array returned from the filter method when getting items that are less than or equal to the maxPrice.
    allCartItems = allCartItems.filter(
      (item) => item.price <= Number(maxPrice)
    );
  }
  // Checking if we have a prefix query string value.
  if (prefix) {
    // If we do then setting allCartItems equal to the array returned from the filter method when getting items where the product starts with the prefix string.
    allCartItems = allCartItems.filter((item) =>
      item.product.startsWith(prefix as string)
    );
  }
  // Checking if we have a pageSize query string value.
  if (pageSize) {
    // If we do then setting allCartItems equal to the array returned from the slice method when setting the end index equal to value of the pageSize.
    allCartItems = allCartItems.slice(0, Number(pageSize));
  }
  return res.status(200).json(allCartItems);
}

export function getCartItem(req: Request, res: Response) {
  const cartItem = cartItems.find((item) => item.id === req.params.id);
  if (!cartItem) res.status(404).json('ID Not Found');
  return res.status(200).json(cartItem);
}

export function addCartItem(req: Request, res: Response) {
  const newItem: CartItem = { id: nanoid(5), ...req.body };
  cartItems.push(newItem);
  return res.status(201).json(newItem);
}

export function updateCartItem(req: Request, res: Response) {
  const cartItem = cartItems.find(
    (item) => item.id === req.params.id
  ) as CartItem;
  const itemIndex = cartItems.findIndex((item) => item.id === req.params.id);
  const updatedCartItem: CartItem = { ...cartItem, ...req.body };
  cartItems.splice(itemIndex, 1, updatedCartItem);
  return res.status(200).json(updatedCartItem);
}

export function deleteCartItem(req: Request, res: Response) {
  const itemIndex = cartItems.findIndex((item) => item.id === req.params.id);
  cartItems.splice(itemIndex, 1);
  res.sendStatus(204);
}
