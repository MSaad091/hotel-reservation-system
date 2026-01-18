import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Get to know who we are and what we do</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We aim to provide the best services to our customers by focusing on
            quality, trust, and innovation. Our goal is to deliver solutions
            that make your life easier and better.
          </p>

          <h2>Our Vision</h2>
          <p>
            To become a leading platform in our industry by continuously
            improving and keeping our customers at the heart of everything we
            do.
          </p>

          <h2>Our Team</h2>
          <p>
            We are a group of passionate individuals who believe in hard work,
            creativity, and collaboration to achieve great results.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
