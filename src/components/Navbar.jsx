import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, org } from '../data/content.js';

export default function Navbar() {
  const [open, setOpen] = useState(false); // menu mobile
  const [openSub, setOpenSub] = useState(null); // label submenu desktop yang terbuka
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  // Tutup semua menu setiap pindah halaman
  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  // Tutup submenu saat klik di luar navbar atau tekan Escape
  useEffect(() => {
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpenSub(null);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenSub(null);
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <header className="nav" ref={headerRef}>
      <div className="ulos ulos--thin" aria-hidden="true" />
      <div className="nav__bar container">
        <Link to="/" className="brand">
          <img src="/logo.svg" alt="" width="40" height="40" />
          <span className="brand__text">
            <strong>PUI Literasi dan Seni</strong>
            <small>{org.university}</small>
          </span>
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu-utama"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Tutup' : 'Menu'}
        </button>

        <nav id="menu-utama" className={`nav__menu${open ? ' is-open' : ''}`} aria-label="Navigasi utama">
          <ul>
            {nav.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.path}>
                    <NavLink to={item.path} end className="nav__link">
                      {item.label}
                    </NavLink>
                  </li>
                );
              }

              const isOpen = openSub === item.label;
              const isCurrent = item.children.some((c) => c.path === pathname);

              return (
                <li
                  key={item.label}
                  className={`has-sub${isOpen ? ' is-open' : ''}`}
                  onMouseEnter={() => setOpenSub(item.label)}
                  onMouseLeave={() => setOpenSub((cur) => (cur === item.label ? null : cur))}
                  onBlur={(e) => {
                    // Tutup saat fokus keyboard keluar dari grup ini
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setOpenSub((cur) => (cur === item.label ? null : cur));
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`nav__link nav__link--group${isCurrent ? ' is-current' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenSub(isOpen ? null : item.label)}
                  >
                    {item.label}
                  </button>
                  <ul className="sub">
                    {item.children.map((c) => (
                      <li key={c.path}>
                        <NavLink to={c.path}>{c.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
