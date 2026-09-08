import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Open Source Issue Tracker</h2>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/issues">Issue List</Link>
        <Link to="/create">Create Issue</Link>
      </div>
    </nav>
  );
}

export default Navbar;
