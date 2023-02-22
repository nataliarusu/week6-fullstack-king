import { useContext, useState } from 'react';
import ctx from '@/store/ctx-obj';

export default function Cart() {
  const cartCTX = useContext(ctx);
  console.log(cartCTX, ' context in cart');
  const items = cartCTX.items;

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((el) => (
          <li key={el.id + Math.random()}>
            <p>{el.title}</p>
            <p>items: {el.items}</p>
          </li>
        ))}
      </ul>
      <p>£ {cartCTX.totalAmount.toFixed(2)}</p>
    </div>
  );
}
