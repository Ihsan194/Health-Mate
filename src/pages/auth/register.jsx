import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { REGISTER } from '../../api/api';
import { setToken } from '../../utils/auth';

export default function Register(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      const res = await REGISTER({ name, email, password });
      if (!res.token) throw res;
      setToken(res.token);
      nav('/dashboard');
    } catch (e) {
      setErr(e.message || 'Register failed');
    } finally { setLoading(false); }
  };

  return (
    <div className="card auth">
      <h2>Create account</h2>
      <form onSubmit={submit}>
        <label>Name<input value={name} onChange={e=>setName(e.target.value)} required/></label>
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
        <button className="btn" type="submit" disabled={loading}>{loading ? <Loader size={20}/> : 'Sign up'}</button>
        {err && <p className="error">{err}</p>}
      </form>
      <p>already have an account? </p>
      <Link to="/login" className="btn-ghost">Login</Link>
    </div>
  );
}
