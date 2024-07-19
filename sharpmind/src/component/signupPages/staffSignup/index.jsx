import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../../utils/navbar/index';
import Footer from '../../../utils/footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const StaffSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/staff/signup', { name, email, password });
      setSuccess('Staff registered successfully!');
      setError('');
    } catch (error) {
      setError('Error signing up. Please try again.');
      setSuccess('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container login-container">
        <h2 className="text-center">Staff Signup</h2>
        <form onSubmit={handleSignup} className="form-signin">
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Signup</button>
          {error && <p className="text-danger text-center mt-3">{error}</p>}
          {success && <p className="text-success text-center mt-3">{success}</p>}
          <p className="text-center mt-3">
            Already have an account? <Link to="/login/staff" className="toggle-button">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default StaffSignup;
