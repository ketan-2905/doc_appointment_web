import React from "react";
import doctorImage from "../assets/doctor.png";
import {Link} from 'react-router-dom'


const Profile = () => {
  return (
    <section id="profile">
      <div className="profile-info-container">
        <p className="profile-title">
          {" "}
          We help patients live a healthy, longer life{" "}
        </p>
        <p className="profile-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis ipsam libero beatae, sint recusandae non enim explicabo omnis nulla. Assumenda ullam consequuntur eaque temporibus ut quas delectus ratione omnis?</p>
        <Link to='/appointmentForm'><button className="btn profile-appoinment-btn">
          Request an Appoinment
        </button></Link>
        <div className="profile-numarical-data">
          <div className="experience-numarical-data">
            <span className="numarical-data">15+</span>
            <span className="numarical-data-line"></span>
            <p className="numarical-data-description">Experience</p>
          </div>
          <div className="clint-location-numarical-data">
            <span className="numarical-data">10+</span>
            <span className="numarical-data-line"></span>
            <p className="numarical-data-description">Clinic Locations</p>
          </div>
          <div className="patient-satisfaction-numarical-data">
            <span className="numarical-data">100%</span>
            <span className="numarical-data-line"></span>
            <p className="numarical-data-description">Patient Satisfaction</p>
          </div>
        </div>
      </div>
      <div className="profile-pic-container">
        <img
          src={doctorImage}
          alt="Doc profile picture"
          className="profile-pic"
        />
      </div>
    </section>
  );
};

export default Profile;
