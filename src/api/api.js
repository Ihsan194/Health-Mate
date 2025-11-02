

const API_ROOT = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const request = async (url, opts = {}) => {
  const headers = opts.headers || {};
  const token = localStorage.getItem('hm_token');
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (!(opts.body instanceof FormData)) headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  const res = await fetch(`${API_ROOT}${url}`, { ...opts, headers });
  if (!res.ok) {
    const err = await res.json().catch(()=>({message:res.statusText}));
    throw err;
  }
  return res.json().catch(()=>null);
};

export const LOGIN = (body) => fetch(`${API_ROOT}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)}).then(r => r.json());
export const REGISTER = (body) => fetch(`${API_ROOT}/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)}).then(r => r.json());
