import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';

export default function ComingSoon({ title, group, notFound }) {
  return (
    <>
      <PageHeader title={title} group={group} />
      <div className="container section soon">
        {notFound ? (
          <>
            <p>Alamat yang kamu buka tidak ada. Kembali ke beranda atau pilih menu di atas.</p>
          </>
        ) : (
          <>
            <p className="badge">Sedang disiapkan</p>
            <p>Halaman ini belum memiliki isi. Konten akan ditambahkan setelah datanya tersedia.</p>
          </>
        )}
        <Link to="/" className="btn btn--navy">Kembali ke beranda</Link>
      </div>
    </>
  );
}
