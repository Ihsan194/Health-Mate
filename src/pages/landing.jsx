import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";   // uses your existing navbar.jsx
import Loader from "../components/loader";   // uses your existing Loader.jsx
import Toast from "../components/toast";     // uses your existing Toast.jsx
import "../styles/main.css";
import "../styles/components.css";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState("");
  const sectionsRef = useRef([]);

  // add section refs for intersection observer
  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  // initial loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900); // short loader for polish
    return () => clearTimeout(t);
  }, []);

  // intersection observer for fade-up animation
  useEffect(() => {
    if (loading) return; // don't observe while loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-up-visible");
        });
      },
      { threshold: 0.18 }
    );

    sectionsRef.current.forEach((s) => {
      if (s) observer.observe(s);
    });

    return () => observer.disconnect();
  }, [loading]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setToastMsg("Thanks — we received your message. We'll reply soon!");
    e.target.reset();
    setTimeout(() => setToastMsg(""), 3500);
  };

  if (loading) {
    return (
      <>
        <Loader size={64} />
        {/* keep page minimal while loading; Navbar not shown to avoid jump */}
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="landing">
        {/* HERO */}
        <section className="hero fade-up" ref={addRef} style={{ paddingTop: 90 }}>
          <div className="container hero-inner" style={{ display: "flex", gap: 36, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 420px" }}>
              <h1 style={{ fontSize: 36, marginBottom: 12 }}>HealthMate — Your Smart Health Companion</h1>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>
                Track vitals, store reports securely, and get AI-assisted insights in both English and Roman Urdu — all in one place.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a className="btn" href="/register">Get Started</a>
                <a className="btn-ghost" href="#features">Explore Features</a>
              </div>
            </div>

            <div style={{ flex: "1 1 380px", textAlign: "center" }}>
              <img
                src="https://news.mit.edu/sites/default/files/images/202207/MIT-Healthcare-Technology-01.jpg"
                alt="Doctor using technology"
                style={{ width: "100%", maxWidth: 520, borderRadius: 14, boxShadow: "0 12px 30px rgba(11,99,246,0.08)" }}
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="fade-up" ref={addRef} style={{ background: "#f8fbff", padding: "70px 0" }}>
          <div className="container" style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 420px" }}>
              <img
                src="https://www.scnsoft.com/blog-pictures/healthcare/health_data_analysis-01_1.png"
                alt="Health analytics"
                style={{ width: "100%", borderRadius: 12 }}
              />
            </div>
            <div style={{ flex: "1 1 420px" }}>
              <h2>About HealthMate</h2>
              <p style={{ color: "var(--muted)" }}>
                HealthMate is built to make health management simple and smart. Store all your medical documents,
                monitor trends, and receive quick AI-driven summaries that help you understand your reports.
              </p>
              <blockquote style={{ marginTop: 14 }}>
                “Smart, private, and easy — health tracking reimagined.”
              </blockquote>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="fade-up" ref={addRef} style={{ padding: "70px 0" }}>
          <div className="container center">
            <h2>Powerful Features</h2>
            <p style={{ color: "var(--muted)" }}>All the tools you need to manage and understand your health.</p>

            <div className="grid" style={{ marginTop: 28 }}>
              <div className="card">
                <img src="https://www.lilavaticlinic.com/wp-content/uploads/2024/04/blog_3-1170x646.jpg" alt="tracking" style={{ width: "100%", borderRadius: 10 }} />
                <h3>Live Tracking</h3>
                <p style={{ color: "var(--muted)" }}>Record and visualize your vitals with daily trends.</p>
              </div>

              <div className="card">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1080&q=80" alt="ai" style={{ width: "100%", borderRadius: 10 }} />
                <h3>AI Assistant</h3>
                <p style={{ color: "var(--muted)" }}>Instant, bilingual AI summaries for every report you upload.</p>
              </div>

              <div className="card">
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1080&q=80" alt="analytics" style={{ width: "100%", borderRadius: 10 }} />
                <h3>Detailed Reports</h3>
                <p style={{ color: "var(--muted)" }}>Export & share secure PDF summaries with doctors.</p>
              </div>

              <div className="card">
                <img src="https://www.lepide.com/blog/wp-content/uploads/2023/12/file-security.jpg" alt="security" style={{ width: "100%", borderRadius: 10 }} />
                <h3>Encrypted Storage</h3>
                <p style={{ color: "var(--muted)" }}>Your files are stored securely on trusted cloud storage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="fade-up" ref={addRef} style={{ background: "#fff", padding: "70px 0" }}>
          <div className="container">
            <h2>How It Works</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 20 }}>
              <div className="card">
                <h4>1. Create Account</h4>
                <p style={{ color: "var(--muted)" }}>Sign up quickly and secure your profile.</p>
              </div>
              <div className="card">
                <h4>2. Upload Reports</h4>
                <p style={{ color: "var(--muted)" }}>Add PDFs or images — we accept standard formats.</p>
              </div>
              <div className="card">
                <h4>3. AI Analysis</h4>
                <p style={{ color: "var(--muted)" }}>Get bilingual summaries and suggested questions for your doctor.</p>
              </div>
              <div className="card">
                <h4>4. Track Progress</h4>
                <p style={{ color: "var(--muted)" }}>Monitor improvements over time with visual charts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="fade-up" ref={addRef} style={{ background: "#f8fbff", padding: "70px 0" }}>
          <div className="container center">
            <h2>Testimonials</h2>
            <div className="grid" style={{ marginTop: 24 }}>
              <div className="card">
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1080&q=80" alt="user1" style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", margin: "0 auto 12px" }} />
                <p style={{ color: "var(--muted)" }}>“HealthMate helped me finally understand my blood test.”</p>
                <strong>- Ayesha</strong>
              </div>
              <div className="card">
                <img src="/images/MyImage.jpg" alt="user2" style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", margin: "0 auto 12px" }} />
                <p style={{ color: "var(--muted)" }}>“Quick and reliable — I recommend it to everyone.”</p>
                <strong>- Ihsan Ali</strong>
              </div>
              <div className="card">
                <img src="https://media.istockphoto.com/id/174766396/photo/young-asian-indian-businessman-working-on-laptop-in-cafeteria.jpg?s=612x612&w=0&k=20&c=upHI7iHf9xaU2y1NkUz_wLbGvCNYaFHXUYWWD_uUM-w=" alt="user3" style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", margin: "0 auto 12px" }} />
                <p style={{ color: "var(--muted)" }}>“Organizing reports is now effortless.”</p>
                <strong>- Hamad</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="fade-up" ref={addRef} style={{ padding: "70px 0" }}>
          <div className="container" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 360px" }}>
              <h2>Get in Touch</h2>
              <p style={{ color: "var(--muted)" }}>
                Have questions, partnership ideas, or feedback? Fill the form and we'll respond within 48 hours.
              </p>
              <ul style={{ color: "var(--muted)", marginTop: 12 }}>
                <li><strong>Email:</strong> ihsanalijamali22@gmail.com</li>
                <li><strong>Phone:</strong> +92 337 2171399</li>
                <li><strong>Address:</strong> Defenec view, Karachi, Pakistan</li>
              </ul>

              <div style={{ marginTop: 14 }}>
                <a href="https://www.facebook.com/ihsan.ali.28" target="_blank" className="btn-ghost" style={{ marginRight: 8 }}>Facebook</a>
                <a href="https://www.linkedin.com/in/ihsan-ali-jamali/" target="_blank" className="btn-ghost" style={{ marginRight: 8 }}>LinkedIn</a>
                <a href="https://github.com/Ihsan194" target="_blank" className="btn-ghost">GitHub</a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} style={{ flex: "1 1 420px" }} className="card">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
              <label>Email</label>
              <input type="email" placeholder="Your email" required />
              <label>Message</label>
              <textarea placeholder="Your message" rows={4} required></textarea>
              <button type="submit" className="btn" style={{ marginTop: 12 }}>Send Message</button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#0b1730", color: "#fff", padding: 22, textAlign: "center" }}>
          <small>© {new Date().getFullYear()} HealthMate — Smart Health Simplified</small>
        </footer>
      </div>

      <Toast message={toastMsg} type="success" />
    </>
  );
}
