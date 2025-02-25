import Cart from '@/components/Cart/Cart';
import CartProvider from '@/store/ContextProvider';
import Navigation from '../components/Navigation';
import { useState } from 'react';

function Layout(props) {
  const [showCart, setShowCart] = useState(false);
  const toggleShowCartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <Navigation showCart={showCart} onShowCart={toggleShowCartHandler} />
      <main className="layout-main">{props.children}</main>
      {showCart && (
        <Cart showCart={showCart} onShowCart={toggleShowCartHandler} />
      )}
    </CartProvider>
  );
}

export default Layout;
