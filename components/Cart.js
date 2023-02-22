//iman, making the shopping cart look more presentable with css and moving around the content

import { useContext, useState } from 'react';
import ctx from '@/store/ctx-obj';
import classes from './Cart.module.css';

export default function Cart() {
  const cartCTX = useContext(ctx);
  console.log(cartCTX, ' context in cart');
  const items = cartCTX.items;

  return (
    <div className={classes.div}>
      <h1 className={classes.header}>Cart</h1>
      <ul>
        {items.map((el) => (
          <li key={el.id + Math.random()}>
            <p>{el.title}</p>
            <p>{el.items}x</p>
          </li>
        ))}
      </ul>
      <p>£ {cartCTX.totalAmount.toFixed(2)}</p>
    </div>
  );
}
