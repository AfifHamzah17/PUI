import { Link } from 'react-router-dom';
import { nav, org } from '../data/content.js';

export default function Footer() {
  const links = nav.flatMap((i) => (i.children ? i.children.filter((c) => c.ready) : []));

  return (
    <footer className="footer">
      <div className="ulos" aria-hidden="true" />
      <div className="container footer__grid">
        <div>
          <h2>{org.short}</h2>
          <p>
            {org.name}, berada di bawah {org.parent}.
          </p>
        </div>

        <div>
          <h3>Hubungi kami</h3>
          <address>
            <p>{org.university}</p>
            {org.address && <p>{org.address}</p>}
            {org.phone && <p>Telepon: {org.phone}</p>}
            {org.email && (
              <p>
                Email: <a href={`mailto:${org.email}`}>{org.email}</a>
              </p>
            )}
            {org.hours && <p>Jam layanan: {org.hours}</p>}
          </address>
        </div>

        <div>
          <h3>Halaman</h3>
          <ul>
            {links.map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__copy">
        © {new Date().getFullYear()} {org.name}, {org.university}.
      </div>
    </footer>
  );
}
