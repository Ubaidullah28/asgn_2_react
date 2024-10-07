// src/components/WhyUsSection.js
import React from 'react';

const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us section light-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="why-box">
              <h3>Why Choose Yummy</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="more-btn">Learn More <i className="bi bi-chevron-right"></i></a>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="row gy-4">
              <div className="col-xl-4">
                <div className="icon-box">
                  <i className="bi bi-clipboard-data"></i>
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam.</p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="icon-box">
                  <i className="bi bi-gem"></i>
                  <h4>Ullamco laboris ladore lore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
