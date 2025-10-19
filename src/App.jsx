import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import UploadReport from "./pages/uploadReport";
import ManualVitals from "./pages/manualVitals";
import ViewReport from "./pages/viewReport";
import Timeline from "./pages/timeLine";
import Signup from "./pages/signup";
import Login from "./pages/login";
import VerifyOtp from "./pages/otpVerification";
import DashboardLayout from "./layout/dashboardLayout";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* Protected Dashboard Routes (wrapped in layout) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="upload" element={<UploadReport />} />
          <Route path="vitals" element={<ManualVitals />} />
          <Route path="reports" element={<ViewReport />} />
          <Route path="timeline" element={<Timeline />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
