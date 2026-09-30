import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar.jsx';
import Hero from '../components/Hero.jsx';
import Fab from '../components/fab.jsx'; // <-- 1. IMPORT FAB
import { org, programs, missions, members, vision } from '../data/content.js';

const soon = [
  { title: 'Publikasi Ilmiah', text: 'Penelitian, pengabdian kepada masyarakat, dan jurnal.', to: '/publikasi/penelitian' },
  { title: 'Kegiatan', text: 'Workshop dan seminar yang diselenggarakan pusat.', to: '/kegiatan/workshop' },
  { title: 'Kerjasama', text: 'Kemitraan dalam negeri dan luar negeri.', to: '/kerjasama/dalam-negeri' },
];

export default function Home() {
  const [ketua, ...anggota] = members;

  return (
    <>
      <Hero />

      {/* Tentang */}
      <section className="section container about">
        <div>
          <h2>Pusat unggulan riset literasi dan seni untuk pendidikan</h2>
          <p>
            Pada tahun {org.founded}, {org.university} mendirikan {org.name}. Pusat ini lahir dari
            komitmen mengembangkan penelitian dan inovasi berbasis literasi serta seni dalam dunia
            pendidikan, dan berada di bawah {org.parent}.
          </p>
          <div className="actions">
            <Link to="/tentang/sejarah" className="btn btn--navy">Baca sejarah</Link>
            <Link to="/tentang/visi-misi" className="btn btn--ghost">Visi dan misi</Link>
          </div>
        </div>
        <dl className="facts">
          <div><dt>Berdiri</dt><dd>{org.founded}</dd></div>
          <div><dt>Naungan</dt><dd>LPPM UNIMED</dd></div>
          <div><dt>Ketua</dt><dd>{ketua.name}</dd></div>
          <div><dt>Bidang</dt><dd>Literasi, seni, dan pendidikan</dd></div>
        </dl>
      </section>

      {/* Statistik */}
      <section className="stats" aria-label="Angka ringkas">
        <div className="container stats__grid">
          <div><strong>{org.founded}</strong><span>tahun berdiri</span></div>
          <div><strong>{members.length}</strong><span>anggota tim pelaksana</span></div>
          <div><strong>{programs.length}</strong><span>program kerja</span></div>
          <div><strong>{missions.length}</strong><span>misi</span></div>
        </div>
      </section>

      {/* Program kerja */}
      <section className="section container">
        <div className="section__head">
          <h2>Program kerja</h2>
          <Link to="/tentang/program-kerja" className="link">Lihat semua program</Link>
        </div>
        <div className="cards">
          {programs.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.items.length > 0 && (
                <ul className="tags">
                  {p.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Visi */}
      <section className="vision">
        <div className="container">
          <h2>Visi</h2>
          <blockquote>{vision}</blockquote>
          <Link to="/tentang/visi-misi" className="btn btn--line">Selengkapnya</Link>
        </div>
      </section>

      {/* Tim */}
      <section className="section container">
        <div className="section__head">
          <h2>Tim pelaksana</h2>
          <Link to="/keanggotaan/anggota" className="link">Daftar anggota</Link>
        </div>
        <div className="team">
          <article className="lead-member">
            <Avatar member={ketua} large />
            <div>
              <p className="role">{ketua.role}</p>
              <h3>{ketua.name}</h3>
              <p>{ketua.institution}, bidang {ketua.expertise}</p>
            </div>
          </article>
          <ul className="team__list">
            {anggota.map((m) => (
              <li key={m.name}>
                <Avatar member={m} />
                <span>
                  {m.name}
                  <small>{m.role}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Halaman yang sedang disiapkan */}
      <section className="section container">
        <div className="section__head">
          <h2>Sedang disiapkan</h2>
        </div>
        <div className="cards cards--3">
          {soon.map((s) => (
            <Link key={s.title} to={s.to} className="card card--link">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="badge">Segera hadir</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. PANGGIL KOMPONEN FAB DI SINI */}
      <Fab /> 
    </>
  );
}