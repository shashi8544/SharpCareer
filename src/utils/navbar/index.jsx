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
            <li><Link to="/programme">B.Tech</Link></li>
            <li><Link to="/programme">BCA</Link></li>
            <li><Link to="/programme">Management</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/login">Profile <span className="dropdown-arrow">▼</span></Link>
          <ul className="dropdown-menu" style={{listStyle: "none"}}>
            <li><Link to="/login/student">student</Link></li>
            <li><Link to="/login/faculty">faculty</Link></li>
            <li><Link to="/login/staff">Staff</Link></li>
          </ul>
        </li>
        
      <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <ul className="navbar-menu">
        <li className="navbar-search">
          <input type="text" placeholder="Search..." />
        </li>
        <li className="ml-auto" > {/* Push the following items to the right */}
          <Link to="/admission"><button className="btn btn-success">Apply for Admission</button></Link>
        </li>
        <li>
          <Link to="/login"><button className="btn btn-primary">Login</button></Link>
        </li>

      </ul>
    </nav>
  );
}
