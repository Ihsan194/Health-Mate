import React, { useEffect, useState } from 'react';
import { request } from '../api/api';
import Loader from '../components/loader';

export default function Timeline(){
  const [files, setFiles] = useState(null);
  const [vitals, setVitals] = useState(null);

  useEffect(()=>{
    (async ()=>{
      try {
        const f = await request('/files');
        const v = await request('/vitals');
        setFiles(f);
        setVitals(v);
      } catch (e) {
        console.error(e);
      }
    })();
  },[]);

  if (!files || !vitals) return <div className="center"><Loader size={60} /></div>;

  return (
    <div>
      <h2>Timeline</h2>
      <div className="timeline">
        {vitals.map(v => (
          <div className="timeline-item" key={v._id}>
            <strong>{v.type}</strong> — {v.value} <small>{new Date(v.recordedAt).toLocaleDateString()}</small>
          </div>
        ))}
        {files.map(f => (
          <div className="timeline-item" key={f._id}>
            <strong>Report</strong> — {f.filename} <small>{new Date(f.uploadedAt).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
