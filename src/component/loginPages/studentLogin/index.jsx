import React, { useState, useContext } from 'react';
import { UserContext } from '../../../utils/router';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../../utils/navbar/index';
import Footer from '../../../utils/footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Create navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/student/login', { email, password });
      setUser({ email, token: response.data.token });
      navigate('/student/dashboard');  // Navigate to the dashboard
    } catch (error) {
      setError('Error logging in. Please check your credentials and try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container login-container">
        <h2 className="text-center">Student Login</h2>
        <form onSubmit={handleLogin} className="form-signin">
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
          <br></br>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          {error && <p className="text-danger text-center mt-3">{error}</p>}
          <p className="text-center mt-3">
            Don't have an account? <Link to="/signup/student" className="toggle-button">Signup</Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default StudentLogin;
