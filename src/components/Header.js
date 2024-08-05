import React from "react";
import Nav  from './Nav';

const Header = () => {
  return (
  <header className="header">
    <h1>Dr. Sarah Jones</h1>
    <div>
    <Nav />
    <button className="btn header-appoinment-btn">
      Book an Appointmentt
    </button>
    </div>
  </header>
  );
};

export default Header;
