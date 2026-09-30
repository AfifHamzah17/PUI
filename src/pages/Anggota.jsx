import Avatar from '../components/Avatar.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { members } from '../data/content.js';

export default function Anggota() {
  // 1. Cari Ketua
  const ketua = members.find((m) => m.role.toLowerCase().includes('ketua'));
  // 2. Sisakan anggota saja
  const anggota = members.filter((m) => m !== ketua);

  return (
    <>
      <PageHeader
        title="Daftar Nama Anggota"
        group="Keanggotaan"
        lead={`${members.length} orang: satu ketua dan ${members.length - 1} anggota tim pelaksana.`}
      />
      <div className="container section">
        
        {/* Bagian Ketua (Di tengah atas) */}
        {ketua && (
          <div className="roster-lead">
            <div className="roster-lead__card">
              <Avatar member={ketua} />
              <div>
                <h2>{ketua.name}</h2>
                <p className="role">{ketua.role}</p>
                {ketua.institution && (
                  <p className="muted">{ketua.institution}, bidang {ketua.expertise}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Bagian Anggota (Grid Maks 3 Kolom) */}
        <ul className="roster">
          {anggota.map((m) => (
            <li key={m.name}>
              <Avatar member={m} />
              <div>
                <h2>{m.name}</h2>
                <p className="role">{m.role}</p>
                {m.institution && (
                  <p className="muted">{m.institution}, bidang {m.expertise}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}