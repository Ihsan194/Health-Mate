import React, { useState } from 'react';
import { request } from '../api/api';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

export default function UploadReport(){
  const [file,setFile]=useState(null);
  const [loading,setLoading]=useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (!file) return alert('Select a file');
    const fd = new FormData();
    fd.append('file', file);
    try {
      setLoading(true);
      await request('/files/upload', { method: 'POST', body: fd });
      nav('/dashboard');
    } catch (e) {
      alert(e.message || 'Upload failed');
    } finally { setLoading(false); }
  };

  return (
    <div className="card">
      <h2>Upload Medical Report</h2>
      <form onSubmit={submit}>
        <label className="file">
          Choose File
          <input type="file" accept=".pdf,image/*" onChange={e=>setFile(e.target.files[0])} required/>
        </label>
        <button className="btn" type="submit" disabled={loading}>{loading ? <Loader size={20}/> : 'Upload'}</button>
      </form>
    </div>
  );
}
