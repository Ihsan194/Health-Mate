import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>HealthMate</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" end>🏠 Dashboard</NavLink>
        <NavLink to="/dashboard/upload">📤 Upload Report</NavLink>
        <NavLink to="/dashboard/vitals">🩺 Add Manual Vitals</NavLink>
        <NavLink to="/dashboard/reports">📄 View Reports</NavLink>
        <NavLink to="/dashboard/timeline">📅 Timeline View</NavLink>
      </nav>
    </aside>
  );
}
