// LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Navbar from '../navbar/index';
import Footer from '../footer/index'

const LoginPage = () => {
  return (
    <>
    <Navbar/>
    <div className="login-page">
      <h2>Login Type</h2>
      <div className="login-options">
        <Link to="/login/student" className="login-option">
          <div className="login-image student"></div>
          <span>Student</span>
        </Link>
        <Link to="/login/faculty" className="login-option">
          <div className="login-image faculty"></div>
          <span>Faculty</span>
        </Link>
        <Link to="/login/staff" className="login-option">
          <div className="login-image staff"></div>
          <span>Staff</span>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default LoginPage;
