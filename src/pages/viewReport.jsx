import React, { useEffect, useState } from 'react';
import { request } from '../api/api';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader';

export default function ViewReport(){
  const { id } = useParams();
  const [data,setData] = useState(null);

  useEffect(()=>{
    (async ()=>{
      try {
        const res = await request(`/files/${id}`);
        setData(res);
      } catch (e) {
        setData({ error: e.message || 'Failed' });
      }
    })();
  },[id]);

  if (!data) return <div className="center"><Loader size={60} /></div>;
  if (data.error) return <div className="card"><p className="error">{data.error}</p></div>;

  const { file, insight } = data;
  return (
    <div className="card">
      <h2>{file.filename}</h2>
      <a className="btn-ghost" href={file.url} target="_blank" rel="noreferrer">Open file</a>
      <h3>AI Summary</h3>
      <p>{insight?.summary}</p>
      <h4>Roman Urdu</h4>
      <p>{insight?.romanUrdu}</p>
      <h4>Highlights</h4>
      <ul>{(insight?.highlights || []).map((h,i)=><li key={i}>{h}</li>)}</ul>
      <h4>Questions</h4>
      <ul>{(insight?.recommendedQuestions || []).map((q,i)=><li key={i}>{q}</li>)}</ul>
    </div>
  );
}
