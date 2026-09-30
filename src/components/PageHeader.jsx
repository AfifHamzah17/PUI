import { Link } from 'react-router-dom';

export default function PageHeader({ title, group, lead }) {
  return (
    <header className="pagehead">
      <div className="container">
        <p className="crumbs">
          <Link to="/">Beranda</Link>
          {group && <span> / {group}</span>}
          <span> / {title}</span>
        </p>
        <h1>{title}</h1>
        {lead && <p className="pagehead__lead">{lead}</p>}
      </div>
      <div className="ulos" aria-hidden="true" />
    </header>
  );
}
