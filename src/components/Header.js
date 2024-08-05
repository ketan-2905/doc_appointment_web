import React from "react";
import Nav  from './Nav';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
  <header className="header">
    <h1>Dr. Sarah Jones</h1>
    <div>
    <Nav />
    <Link to='/appointmentForm'><button className="btn header-appoinment-btn">
      Book an Appointment
    </button></Link>
    </div>
  </header>
  );
};

export default Header;
