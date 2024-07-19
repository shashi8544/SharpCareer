// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="/institute">Institute <span className="dropdown-arrow">▼</span></Link>
          <ul className="dropdown-menu" style={{listStyle: "none"}}>
            <li><Link to="/institute/overview">Overview</Link></li>
            <li><Link to="/institute/departments">Departments</Link></li>
            <li><Link to="/institute/faculty">Faculty</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/programme">Programme <span className="dropdown-arrow">▼</span></Link>
          <ul className="dropdown-menu" style={{listStyle: "none"}}>
            <li><Link to="/programs/undergraduate">Undergraduate</Link></li>
            <li><Link to="/programs/postgraduate">Postgraduate</Link></li>
            <li><Link to="/programs/phd">PhD</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/profile">Profile <span className="dropdown-arrow">▼</span></Link>
          <ul className="dropdown-menu" style={{listStyle: "none"}}>
            <li><Link to="/profile/view">View Profile</Link></li>
            <li><Link to="/profile/edit">Edit Profile</Link></li>
            <li><Link to="/profile/settings">Settings</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/contact">Contact Us <span className="dropdown-arrow">▼</span></Link>
          <ul className="dropdown-menu" style={{listStyle: "none"}}>
            <li><Link to="/contact/office">Office</Link></li>
            <li><Link to="/contact/support">Support</Link></li>
            <li><Link to="/contact/feedback">Feedback</Link></li>
          </ul>
        </li>
        <li className="navbar-search">
          <input type="text" placeholder="Search..." />
        </li>
        <li><Link to="/login"><button className="login-button">Login</button></Link></li>
      </ul>
    </nav>
  );
}
