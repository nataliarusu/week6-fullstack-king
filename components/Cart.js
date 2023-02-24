import { useContext } from 'react';
import ctx from '@/store/ctx-obj';
import Card from './UI/Card';
import classes from './Cart.module.css';
import Button from './UI/Button';

export default function Cart(props) {
  const cartCTX = useContext(ctx);
  console.log(cartCTX, ' context in cart');
  const items = cartCTX.items;

  return (
    <Card className={classes['cart-wrapper']}>
      <h1 className={classes.title}>Cart</h1>
      {items.length > 0 ? (
        <ul className={classes['cart-list']}>
          {items.map((el) => (
            <li key={el.id + Math.random()} className={classes['cart-item']}>
              <p>{el.title}</p>
              <p>items: {el.items}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
      <p className={classes.total}>Total: £ {cartCTX.totalAmount.toFixed(2)}</p>
      <div>
        <Button onClick={props.onShowCart}>Close</Button>
      </div>
    </Card>
  );
}
