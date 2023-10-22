import React from 'react';
import './burger.css'; // Import the CSS styles

function Burger({ showMenu, toggleMenu }) {
  return (
    <div className={`container ${showMenu ? 'change' : ''}`} onClick={toggleMenu}>
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
    </div>
  );
}

export default Burger;
