import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // import navbar styles
import '/Users/augustusseabrooke/Desktop/Business/All Pro Nails /allpronails/src/components/NavBar/NavBar.js'
import Burger from './src/components/burger/burger.js';

function NavBar() {
     // Initialize showMenu as false
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
    // Log whether bar1 and bar2 are showing up
    const bar1Element = document.querySelector('.bar.bar1');
    const bar2Element = document.querySelector('.bar.bar2');
  
    if (bar1Element && bar2Element) {
      console.log('bar1 and bar2 are showing up');
    } else {
      console.log('bar1 and bar2 are NOT showing up');
    }

    return (
        <>
          <Burger showMenu={showMenu} toggleMenu={toggleMenu} /> {/* Use the Burger component */}
        <nav>
                <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`}>
                    <li><Link to="/" className="nav-link" data-text="Home">Home</Link></li>
                    <li><Link to="/about-us" className="nav-link" data-text="About Us">About Us</Link></li>
                    <li><Link to="/booking" className="nav-link" data-text="Booking">Booking</Link></li>
                    <li><Link to="/contact-us" className="nav-link" data-text="Contact Us">Contact Us</Link></li>
                    <li><Link to="/services-price-list" className="nav-link" data-text="Services & Prices">Services & Prices</Link></li>
                </ul>
            </nav></>
    );
}

export default NavBar;
