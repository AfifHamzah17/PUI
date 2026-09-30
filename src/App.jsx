import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Sejarah from './pages/Sejarah.jsx';
import ProgramKerja from './pages/ProgramKerja.jsx';
import VisiMisi from './pages/VisiMisi.jsx';
import Struktur from './pages/Struktur.jsx';
import Anggota from './pages/Anggota.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import { nav } from './data/content.js';

// Halaman yang sudah punya isi
const readyPages = {
  '/tentang/sejarah': Sejarah,
  '/tentang/program-kerja': ProgramKerja,
  '/tentang/visi-misi': VisiMisi,
  '/tentang/struktur-organisasi': Struktur,
  '/keanggotaan/anggota': Anggota,
};

// Halaman yang belum ada isinya dibuat otomatis dari data menu
const soonPages = nav
  .flatMap((item) => (item.children ? item.children.map((c) => ({ ...c, group: item.label })) : []))
  .filter((c) => !readyPages[c.path]);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {Object.entries(readyPages).map(([path, Page]) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
        {soonPages.map((p) => (
          <Route key={p.path} path={p.path} element={<ComingSoon title={p.label} group={p.group} />} />
        ))}
        <Route path="*" element={<ComingSoon title="Halaman tidak ditemukan" notFound />} />
      </Route>
    </Routes>
  );
}
