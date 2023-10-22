import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BookingPage from './pages/BookingPage';
import ContactUsPage from './pages/ContactUsPage';
import ServicesPriceListPage from './pages/ServicesPriceListPage';
import NavBar from './components/NavBar/NavBar'; // Import NavBar
import { Route, Routes } from 'react-router-dom';
import Burger from './components/burger/burger';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 data-text="All Pro Nails Salon">All Pro Nails Salon</h1>
      hello
      <NavBar /> 
      </header>
      <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services-price-list" element={<ServicesPriceListPage/>} />
      </Routes>

    </div>
  );
}

export default App;

