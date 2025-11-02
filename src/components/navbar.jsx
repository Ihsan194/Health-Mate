import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearToken, getToken } from '../utils/auth';

export default function Navbar(){
  const token = getToken();
  const nav = useNavigate();
  const logout = () => { clearToken(); nav('/'); };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link className="brand" to="/">HealthMate</Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/upload">Upload</Link>
            <button className="btn-ghost" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="btn">Get Started</Link>
          </>
        )}
      </div>
    </nav>
  );
}
