import { getCart } from 'lib/shopify';
// import { cookies } from 'next/headers';

import CartModal from './modal';
import { NextRequest } from 'next/server';

export default async function Cart(request: NextRequest) {
  const cartId = request.cookies?.get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartModal cart={cart} />;
}
