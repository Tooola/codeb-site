import { Outlet } from 'react-router-dom';
import Cursor from './Cursor';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Cursor />
      <Nav />
      <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
