import { useState } from 'react';

// Menampilkan foto anggota (bulat). Bila foto belum ada / gagal dimuat, tampil inisial.
export default function Avatar({ member, large = false }) {
  const [failed, setFailed] = useState(false);
  const size = large ? ' avatar--lg' : '';

  if (member.photo && !failed) {
    return (
      <img
        className={`avatar avatar--photo${size}`}
        src={member.photo}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <span className={`avatar${size}`} aria-hidden="true">
      {member.initials}
    </span>
  );
}
