import PageHeader from '../components/PageHeader.jsx';
import { vision, missions } from '../data/content.js';

export default function VisiMisi() {
  return (
    <>
      <PageHeader title="Visi dan Misi" group="Tentang" />
      <section className="vision vision--page">
        <div className="container">
          <h2>Visi</h2>
          <blockquote>{vision}</blockquote>
        </div>
      </section>
      <section className="container section">
        <h2>Misi</h2>
        <ol className="missions">
          {missions.map((m) => (
            <li key={m.title}>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
