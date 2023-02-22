import Cart from '@/components/Cart';
import CartProvider from '@/store/ContextProvider';
import Navigation from '../components/Navigation';

function Layout(props) {
  return (
    <CartProvider>
      <Navigation />
      <main className="layout-main">{props.children}</main>
      <Cart />
    </CartProvider>
  );
}

export default Layout;
