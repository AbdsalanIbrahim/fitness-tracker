import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDK2jNAGKYmg8LdnBrPHUpld1Ov0-HOiHTtw&s" 
          alt="FITNESS MANIA" 
          className="logo" 
        />
        <h1>FITNESS MANIA</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Exercise</Link></li>
        <li><Link to="/exercises">Exercise List</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
