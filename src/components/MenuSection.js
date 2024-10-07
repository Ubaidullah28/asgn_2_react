// src/components/MenuSection.js
import React from 'react';

const MenuSection = () => {
  return (
    <section id="menu" className="menu section">
      <div className="container section-title">
        <h2>Our Menu</h2>
        <p>Check Our Yummy Menu</p>
      </div>
      <div className="container">
        <ul className="nav nav-tabs d-flex justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#menu-starters">Starters</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">Breakfast</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MenuSection;
