import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/dashboard';
import UploadReport from './pages/uploadReport';
import ViewReport from './pages/viewReport';
import Timeline from './pages/timeLine';
import Navbar from './components/navbar';
import ProtectedRoute from './components/protectedRoute';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path="/upload" element={<ProtectedRoute><UploadReport/></ProtectedRoute>} />
          <Route path="/report/:id" element={<ProtectedRoute><ViewReport/></ProtectedRoute>} />
          <Route path="/timeline" element={<ProtectedRoute><Timeline/></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
