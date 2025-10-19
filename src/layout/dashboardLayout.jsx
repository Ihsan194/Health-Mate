import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./dashboardLayout.css";

export default function DashboardLayout() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>HealthMate</h2>
        <ul>
          <li
            className={active === "dashboard" ? "active" : ""}
            onClick={() => setActive("dashboard")}
          >
            <Link to="/dashboard">🏠 Dashboard</Link>
          </li>
          <li
            className={active === "upload" ? "active" : ""}
            onClick={() => setActive("upload")}
          >
            <Link to="/dashboard/upload">📤 Upload Report</Link>
          </li>
          <li
            className={active === "vitals" ? "active" : ""}
            onClick={() => setActive("vitals")}
          >
            <Link to="/dashboard/vitals">💉 Add Manual Vitals</Link>
          </li>
          <li
            className={active === "view" ? "active" : ""}
            onClick={() => setActive("view")}
          >
            <Link to="/dashboard/view">📄 View Reports</Link>
          </li>
          <li
            className={active === "timeline" ? "active" : ""}
            onClick={() => setActive("timeline")}
          >
            <Link to="/dashboard/timeline">🕒 Timeline View</Link>
          </li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}
