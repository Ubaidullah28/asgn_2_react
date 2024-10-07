// src/components/StatsSection.js
import React from 'react';

const StatsSection = () => {
  return (
    <section id="stats" className="stats section dark-background">
      <img src="assets/img/stats-bg.jpg" alt="" />
      <div className="container position-relative">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <span>232</span>
              <p>Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <span>521</span>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
