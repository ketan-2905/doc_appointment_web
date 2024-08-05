import React from "react";
import doctorImage from "../assets/doctor[1].png"
import phone from "../assets/phone.png"
import email from "../assets//email.png"
import location from "../assets/location.png"




const Contact = ({handleEmailClick}) => {
  return (
  <section id="contact">
    <div className="contact">
      <div className="contact-pic-container">
      <img 
        src={doctorImage} 
        alt="Doc contact picture" 
        className="contact-pic"
        />
      </div>
      <div className="contact-info-container">
        <h1 className="contact-title">Why choose Us?</h1>
        <p className="contact-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, blanditiis assumenda culpa laborum ab fugiat eveniet voluptate itaque</p>
        <div className="contact-cards">
          <div className="contact-card" >
            <h2 className="contact-card-title">Contact us</h2>
            <div className="contact-card-phone" >
              <img 
              src={phone}
              alt="Contact phone pic" 
              className="phone-pic"
              />
              <p>+91 8659848652</p>
              </div>
            <div className="contact-card-email" >
            <img 
              src={email}
              alt="Contact email pic" 
              className="email-pic"
              />
              <p onClick={() => handleEmailClick()}> drsarajhons@gmail.com</p>
              </div>
          </div>

          <div className="contact-card" >
          <h2 className="contact-card-title">Contact us</h2>
            <div className="contact-card-location" >
              <img 
              src={location}
              alt="Contact phone pic" 
              className="location-pic"
              />
              <p>Dr. John Doe's Clinic 1234 Wellness Avenue Healthville, HE 56789 Phone: (555) 123-4567</p></div>
          </div>
        </div>
      </div>
    </div>

  </section>
  );
};

export default Contact;
