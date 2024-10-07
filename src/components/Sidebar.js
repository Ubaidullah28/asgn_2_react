import React from 'react';

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">AdminKit</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>
          <li className="sidebar-item active">
            <a className="sidebar-link" href="index.html">
              <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
            </a>
          </li>
          {/* Add other sidebar items here */}
        </ul>
        <div className="sidebar-cta">
          <div className="sidebar-cta-content">
            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
            <div className="mb-3 text-sm">Are you looking for more components? Check out our premium version.</div>
            <div className="d-grid">
              <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
