import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  const { pathname } = useLocation();

  // Kembali ke atas setiap pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#isi">Lewati ke konten</a>
      <Navbar />
      <main id="isi" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
