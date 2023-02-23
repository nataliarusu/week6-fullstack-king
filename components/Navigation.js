//nav bar
import Link from 'next/link';
import { useContext } from 'react';
import ctx from '@/store/ctx-obj';
import Button from './Button';
import classes from './Navigation.module.css';
import Image from 'next/image';

function Navigation(props) {
  const cartCTX = useContext(ctx);

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
        <Button onClick={props.onShowCart} className={classes['cart-button']}>
          <span>£ {cartCTX.totalAmount.toFixed(2)}</span>
        </Button>
      </nav>
    </header>
  );
}

export default Navigation;
