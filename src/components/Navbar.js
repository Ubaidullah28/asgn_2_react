import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          {/* Add notifications, messages, user profile, etc. */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
