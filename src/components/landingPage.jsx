import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServiceCard from "../components/serviceCard";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your <span>Personal Health Assistant</span> in One App
          </h1>
          <p>
            HealthMate helps you track your vitals, upload reports, and get AI-driven
            insights to manage your health smarter — anytime, anywhere.
          </p>
          <div className="hero-buttons">
            <a href="/signup" className="btn-primary">
              Create Account
            </a>
            <a href="/login" className="btn-secondary">
              Login
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About HealthMate</h2>
        <p>
          HealthMate is designed to simplify your wellness journey by digitizing how you
          record, analyze, and understand your medical data. Whether you want to track
          your blood pressure, upload test reports, or visualize your progress — we’ve got
          you covered.
        </p>
        <p>
          Our platform integrates AI-powered analysis that gives you summarized insights
          from your uploaded reports, helping you make informed health decisions without
          needing to interpret complex medical data.
        </p>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Core Features</h2>
        <div className="services-grid">
          <ServiceCard
            title="Vitals Tracking"
            description="Log your daily health readings like Blood Pressure, Sugar Levels, and Weight. Keep track of your trends and identify changes early."
            icon="🩺"
          />
          <ServiceCard
            title="Smart Report Upload"
            description="Upload your medical test reports, categorize them by type and date, and view them anytime securely."
            icon="📤"
          />
          <ServiceCard
            title="AI-Powered Summary"
            description="Get simplified AI-generated summaries of your uploaded reports — no medical jargon, just clear insights."
            icon="🤖"
          />
          <ServiceCard
            title="Timeline View"
            description="Visualize your complete health history — see your progress across time with combined report and vitals data."
            icon="📅"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              “HealthMate has completely changed how I manage my health. I can track my
              sugar and BP readings without writing them down. The AI summaries are
              amazing!”
            </p>
            <h4>– Sarah Khan, Diabetes Patient</h4>
          </div>
          <div className="testimonial">
            <p>
              “Finally, a single place to store all my medical reports! The timeline view
              makes it so easy to share my data with my doctor.”
            </p>
            <h4>– Usman Ali, Fitness Enthusiast</h4>
          </div>
          <div className="testimonial">
            <p>
              “Simple, intuitive, and powerful. The upload and summary features make
              managing medical records stress-free.”
            </p>
            <h4>– Dr. Ayesha Malik, General Practitioner</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We’d love to hear from you!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
