import { useContext } from 'react';
import ctx from '@/store/ctx-obj';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import Button from '../UI/Button';
import CartItem from './CartItem';

export default function Cart(props) {
  const cartCTX = useContext(ctx);
  const items = cartCTX.items;
  const isItemsInCart = items.length > 0;
  return (
    <Card className={classes['cart-wrapper']}>
      <h1 className={classes.title}>Cart</h1>
      {items.length > 0 ? (
        <ul className={classes['cart-list']}>
          {items.map((item) => (
            <CartItem
              key={item.id + Math.random()}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
      <p className={classes.total}>Total: £ {cartCTX.totalAmount.toFixed(2)}</p>
      <div className={classes.action}>
        <Button onClick={props.onShowCart} className={classes.close}>
          Close
        </Button>
        {isItemsInCart && (
          <Button onClick={props.onShowCart} className={classes.order}>
            Order
          </Button>
        )}
      </div>
    </Card>
  );
}
