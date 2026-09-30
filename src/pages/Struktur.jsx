import Avatar from '../components/Avatar.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { members, org } from '../data/content.js';

export default function Struktur() {
  const [ketua, ...tim] = members;
  return (
    <>
      <PageHeader title="Struktur Organisasi" group="Tentang" lead={`Susunan pengelola ${org.short}.`} />
      <div className="container section">
        <div className="org">
          <div className="org__node org__node--top">
            <Avatar member={ketua} large />
            <p className="role">{ketua.role}</p>
            <h2>{ketua.name}</h2>
            <p>{ketua.institution}</p>
            <p className="muted">Bidang keahlian: {ketua.expertise}</p>
          </div>

          <p className="org__label">Tim Pelaksana</p>
          <ul className="org__tree">
            {tim.map((m) => (
              <li key={m.name} className="org__node">
                <Avatar member={m} />
                <p className="role">{m.role}</p>
                <h3>{m.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
