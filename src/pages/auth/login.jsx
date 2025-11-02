import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { LOGIN } from '../../api/api';
import { setToken } from '../../utils/auth';

export default function Login() {
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
      const res = await LOGIN({ email, password });
      if (!res.token) throw res;
      setToken(res.token);
      nav('/dashboard');
    } catch (e) {
      setErr(e.message || 'Login failed');
    } finally { setLoading(false); }
  };

  return (
    <div className="card auth">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>
        <button className="btn" type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Login'}</button>
        {err && <p className="error">{err}</p>}
      </form>
      <p>don't have an account?</p>
      <Link to="/register" className="btn-ghost">Register</Link>
    </div>
  );
}
