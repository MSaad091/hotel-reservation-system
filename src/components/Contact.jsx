import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const msg = formData.get("message")?.trim();

    if (!name || !email || !msg) {
      setMessage({ type: "error", text: "Please fill all required fields." });
      return;
    }

    setPending(true);
    await new Promise((res) => setTimeout(res, 1500));
    setPending(false);
    setMessage({ type: "success", text: "Thank you! Your message has been sent." });
    form.reset();
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* Hero */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p className="lead">We’d love to hear from you. Send us your queries or feedback.</p>
        </section>

        {/* Flex Layout */}
        <section className="contact-flex">
          {/* Left */}
          <aside className="contact-info">
            <div className="info-card">
              <h2>Get in Touch</h2>
              <p className="muted">We reply within 24 hours.</p>

              <ul className="details">
                <li>
                  <strong>Address</strong>
                  <span>Block A, Clifton, Karachi</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href="tel:+923001234567">+92 300 1234567</a>
                </li>
              </ul>

              <div className="socials">
                <a href="#" className="social">Twitter</a>
                <a href="#" className="social">LinkedIn</a>
                <a href="#" className="social">Instagram</a>
              </div>
            </div>

            <div className="map-card">
              <div className="map-placeholder">Map placeholder — Google Maps here</div>
            </div>
          </aside>

          {/* Right */}
          <div className="contact-form-card">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row two">
                <label>
                  <span>Name *</span>
                  <input name="name" type="text" placeholder="Your full name" />
                </label>
                <label>
                  <span>Email *</span>
                  <input name="email" type="email" placeholder="you@example.com" />
                </label>
              </div>

              <div className="row two">
                <label>
                  <span>Phone</span>
                  <input name="phone" type="tel" placeholder="+92 3xx xxxxxxx" />
                </label>
                <label>
                  <span>Subject</span>
                  <input name="subject" type="text" placeholder="Subject" />
                </label>
              </div>

              <label>
                <span>Message *</span>
                <textarea name="message" placeholder="Write your message..." />
              </label>

              <div className="form-actions">
                <button type="submit" className="btn" disabled={pending}>
                  {pending ? "Sending..." : "Send"}
                </button>
                <button type="button" className="btn muted" onClick={() => document.querySelector(".contact-form").reset()}>
                  Reset
                </button>
              </div>

              {message && <p className={`form-msg ${message.type === "error" ? "err" : "ok"}`}>{message.text}</p>}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
