import React from 'react'
import doctorImage from "../assets/doctor[2].png"

const AboutMe = () => {
  return (
    <section id='about'>
      <div className='about-pic-container'>
        <img 
        src={doctorImage} 
        alt="Doc about pic" 
        className='about-pic'
        />
      </div>
      <div className='about-info-container'>
        <h1 className='about-title'>Proud to Serve Our Community</h1>
        <p className='about-info-text'>
        Our healthcare providers have been dedicated to serving the community for over 10 years, committed to delivering personalized and compassionate care to each patient. With a focus on specific area of expertise or general practice, we ensure that every patient receives the highest quality of medical attention and support.
        </p>
        <p className='about-info-text'>
        Our mission is to foster a welcoming and caring environment where patients feel valued and heard. We strive to stay at the forefront of medical advancements, providing state-of-the-art treatments and personalized care plans tailored to each individual's needs.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
