import PageHeader from '../components/PageHeader.jsx';
import { history, org } from '../data/content.js';

export default function Sejarah() {
  return (
    <>
      <PageHeader title="Sejarah" group="Tentang" lead={`Sejarah ${org.name}, ${org.university}.`} />
      <div className="container article">
        <div className="prose">
          {history.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <aside className="aside">
          <h2>Ringkasan</h2>
          <dl>
            <dt>Didirikan</dt><dd>{org.founded}</dd>
            <dt>Di bawah</dt><dd>{org.parent}</dd>
            <dt>Universitas</dt><dd>{org.university}</dd>
          </dl>
        </aside>
      </div>
    </>
  );
}
