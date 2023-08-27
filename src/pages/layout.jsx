import { Footer } from 'components/footer/footer';
import { Header } from 'components/header/header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
