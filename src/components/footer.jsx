import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>HealthMate</h3>
        <p>Your digital partner for smarter health management.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} HealthMate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
