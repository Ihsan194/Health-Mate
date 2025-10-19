import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/otp/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire("Success!", data.message, "success");
        localStorage.setItem("userEmail", formData.email);
        navigate("/verify-otp");
      } else {
        Swal.fire("Error!", data.message || "Signup failed", "error");
      }
    } catch (error) {
      Swal.fire("Error!", error.message, "error");
    }
  };

  return (
    <div className="signup-container">
      <div className="logo">
        <div className="logo-line"></div>
        <h3>My App</h3>
      </div>

      <div className="signup-box">
        <h1>Sign Up</h1>
        <p className="subtitle">Create an account to continue</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="signin-text">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
}
