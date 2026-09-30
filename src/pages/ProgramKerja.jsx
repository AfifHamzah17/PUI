import PageHeader from '../components/PageHeader.jsx';
import { programs } from '../data/content.js';

export default function ProgramKerja() {
  return (
    <>
      <PageHeader title="Program Kerja" group="Tentang" lead="Lima bidang kerja utama pusat unggulan." />
      <div className="container section">
        <div className="cards">
          {programs.map((p) => (
            <article key={p.title} className="card">
              <h2 className="card__title">{p.title}</h2>
              <p>{p.desc}</p>
              {p.items.length > 0 && (
                <ul className="tags">
                  {p.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
