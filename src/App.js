import './index.css'
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import MissingPage from './components/MissingPage';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';


function App() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:drsarajhons@gmail.com'
  };

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home handleEmailClick = {handleEmailClick} />} />
          <Route path="/appointmentForm" element={<BookingPage />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
    </div>
  );
}

export default App;
