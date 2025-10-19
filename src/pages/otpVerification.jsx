import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire("Success!", data.message, "success");
        localStorage.removeItem("userEmail");
        navigate("/login");
      } else {
        Swal.fire("Error!", data.message || "OTP verification failed", "error");
      }
    } catch (error) {
      Swal.fire("Error!", error.message, "error");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Verify OTP</h1>
        <p className="subtitle">Check your email for the OTP code</p>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button type="submit" className="signup-btn">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
