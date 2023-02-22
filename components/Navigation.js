//nav bar
import Link from 'next/link';
import { useContext, useState } from 'react';
import ctx from '@/store/ctx-obj';
import Button from './Button';
import classes from './Navigation.module.css';

function Navigation() {
  const cartCTX = useContext(ctx);
  const [showCart, setShowCart] = useState(false);
  const toggleShowCartHandler = () => {
    setShowCart(!showCart);
    console.log(showCart);
  };

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Fruit king</div>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">All Fruits</Link>
          </li>
          <li>
            <Link href="/fruits/berries">Berries</Link>
          </li>
          <li>
            <Link href="/fruits/citrus">Citrus</Link>
          </li>
        </ul>
        <Button
          onClick={toggleShowCartHandler}
          className={classes['cart-button']}
        >
          <span>£ {cartCTX.totalAmount.toFixed(2)}</span>
          <span>🛒</span>
        </Button>
      </nav>
    </header>
  );
}

export default Navigation;
