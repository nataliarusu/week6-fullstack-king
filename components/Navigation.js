//nav bar
import Link from 'next/link';

import classes from './Navigation.module.css';

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Fruit king</div>
      <nav>
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
      </nav>
    </header>
  );
}

export default Navigation;
