import React from "react";
import checkMark from "../assets/checkMark.png";

const AppointmentConfirmation = ({ formData }) => {
  return (
    <div className="confirmation-body">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <img src={checkMark} alt="CarePulse" className="confirmation-logo" />
          <h1>Your appointment request has been successfully submitted!</h1>
          <p>We'll be in touch shortly to confirm.</p>
        </div>
        <div className="confirmation-details">
          <h2>Appointment Details</h2>
          <p>
            <strong>Date:</strong> {formData.appointmentDate}
          </p>
          <p>
            <strong>Time:</strong> {formData.appointmentTime}
          </p>
        </div>
        <div className="confirmation-info">
          <h2>Patient Information</h2>
          <p>
            <strong>Full Name:</strong> {formData.fullName}
          </p>
          <p>
            <strong>Date of Birth:</strong> {formData.dob}
          </p>
        </div>
        <div className="confirmation-info">
          <h2>Location Information</h2>
          <p>
            <strong>Clinic:</strong> Dr. Sarah Jones clinic Center
          </p>
          <p>
            <strong>Address:</strong> Dr. John Doe's Clinic 1234 Wellness Avenue Healthville, HE 56789
          </p>
          <p>
            <strong>Contact:</strong> (555) 123-4567
          </p>
        </div>
        <div className="confirmation-footer">
          <p>
            <strong>Confirmation Number:</strong> 123456789
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
