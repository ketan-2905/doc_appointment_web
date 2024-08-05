import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentConfirmation from '../components/AppointmentConfirmation'

import { Router , Routes , BrowserRouter } from 'react-router-dom'

const Home = ({handleEmailClick}) => {
  return (
    <>
    <Header />
    <Profile />
    <AboutMe />
    <Contact handleEmailClick = {handleEmailClick} />
    </>
  )
}

export default Home
