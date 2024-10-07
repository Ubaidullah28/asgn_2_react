// src/components/AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>About Us</h2>
        <p>Learn More About Us</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-7">
            <img src="assets/img/about.jpg" className="img-fluid mb-4" alt="About Us" />
            <div className="book-a-table">
              <h3>Book a Table</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate.</li>
              </ul>
              <div className="position-relative mt-4">
                <img src="assets/img/about-2.jpg" className="img-fluid" alt="More About Us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
