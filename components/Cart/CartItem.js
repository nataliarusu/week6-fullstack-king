import classes from './CartItem.module.css';
function CartItem(props) {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>£ {props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
}
export default CartItem;
