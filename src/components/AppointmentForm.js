import React from "react"
import { useState } from "react"
import AppointmentConfirmation from '../components/AppointmentConfirmation'

const AppointmentForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [medicalDocuments, setMedicalDocuments] = useState([])
  const [dragOver, setDragOver] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    appointmentDate: "",
    appointmentTime: "",
    medicalDocuments: [],
    consent1: false,
    consent2: false,
    consent3: false,
  })

  const handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData({ ...formData, [name]: value })
  }

  const handleFileInput = (medicalDocuments , event) => {
    const name = event.target.name
    const value = medicalDocuments
    setFormData({ ...formData, [name]: value })
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setDragOver(false)
    const files = Array.from(event.dataTransfer.files)
    setMedicalDocuments(files)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => {
    setDragOver(false)
  }

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files)[0]
    setMedicalDocuments([...medicalDocuments , files])
  }

  if (isSubmitted) {
    return (
        <>
        <AppointmentConfirmation formData={formData} />
        </>
    )
}

  return (
    <div className="from-body">
      <div className="container">
        <h1>Book an Appointment</h1>
        <form id="appointmentForm" onSubmit={() => setIsSubmitted(true)}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={(e) => handleInput(e)}
            required
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => handleInput(e)}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            onChange={(e) => handleInput(e)}
          />

          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            onChange={(e) => handleInput(e)}
          />

          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            required
            onChange={(e) => handleInput(e)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="appointmentDate">Date of Appointment:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            required
            onChange={(e) => handleInput(e)}
          />

          <label htmlFor="appointmentTime">Time of Appointment:</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            required
            onChange={(e) => handleInput(e)}
          />

          <label htmlFor="medicalDocuments">Medical Documents:</label>
          <div
            className={`drag-drop ${dragOver ? "drag-over" : ""}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => document.getElementById("medicalDocuments").click()}
          >
            Drag and drop files here or click to select files
          </div>
          <input
            type="file"
            id="medicalDocuments"
            name="medicalDocuments"
            multiple
            style={{ display: "none" }}
            onChange={(e) => {
              handleFileInput(medicalDocuments,e)
              handleFileSelect(e)
            }}
          />
          {medicalDocuments.length > 0 && (
            <ul className="file-list">
              {medicalDocuments.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}

          <div className="consent">
            <input 
            type="checkbox" 
            id="consent1" 
            name="consent1" 
            required                 
            onChange={(e) => handleInput(e)}
            />
            <label htmlFor="consent1">
              I consent to receive treatment for my health and condition.
            </label>
          </div>

          <div className="consent">
            <input 
            type="checkbox" 
            id="consent2" 
            name="consent2" 
            required 
            onChange={(e) => handleInput(e)}
            />
            <label htmlFor="consent2">
              I consent to the use and disclosure of my health information for
              treatment purposes.
            </label>
          </div>

          <div className="consent">
            <input 
            type="checkbox" 
            id="consent3" 
            name="consent3" 
            required 
            onChange={(e) => handleInput(e)}
            />
            <label htmlFor="consent3">
              I acknowledge that I have reviewed and agree to the privacy
              policy.
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AppointmentForm
