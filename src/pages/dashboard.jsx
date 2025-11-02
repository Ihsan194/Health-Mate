import React, { useEffect, useState } from 'react';
import { request } from '../api/api';
import Loader from '../components/loader';
import { Link } from 'react-router-dom';

export default function Dashboard(){
  const [files, setFiles] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(()=> {
    (async () => {
      try {
        const data = await request('/files');
        setFiles(data);
      } catch (e) {
        setErr(e.message || 'Unable to load files');
      }
    })();
  }, []);

  if (!files) return <div className="center"><Loader size={60} /></div>;

  return (
    <div>
      <h1>Your Reports</h1>
      <div className="grid">
        <Link to="/upload" className="card big upload-cta">+ Upload new report</Link>
        {err && <p className="error">{err}</p>}
        {files.map(f => (
          <div key={f._id} className="card file-card">
            <h4>{f.filename}</h4>
            <small>{new Date(f.uploadedAt).toLocaleString()}</small>
            <div className="file-actions">
              <a href={f.url} target="_blank" rel="noreferrer" className="btn-ghost">Preview</a>
              <Link to={`/report/${f._id}`} className="btn">View Summary</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
