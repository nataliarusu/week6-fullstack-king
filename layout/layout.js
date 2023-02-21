import Navigation from '../components/Navigation';

function Layout(props) {
  return (
    <>
      <Navigation />
      <main className="layout-main">{props.children}</main>
    </>
  );
}

export default Layout;
