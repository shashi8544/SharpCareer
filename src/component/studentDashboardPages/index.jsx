import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/router';
import Navbar from '../../utils/navbar/index';
import Footer from '../../utils/footer/index';
import './index.css';

const StudentDashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Welcome, {user.email}</h2>
        <div className="dashboard-sections">
          <div className="dashboard-section">
            <h3>Profile</h3>
            <p>View and edit your profile details.</p>
            <button className="btn btn-primary">View Profile</button>
          </div>
          <div className="dashboard-section">
            <h3>Fee Payment</h3>
            <p>View and pay fee</p>
            <button className="btn btn-primary" onClick={() => navigate('/student/fee-payment')}>Go to Fee Payment Portal</button>
          </div>
          <div className="dashboard-section">
            <h3>Enroll in Courses</h3>
            <p>Browse and enroll in available courses.</p>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
          <div className="dashboard-section">
            <h3>Grades</h3>
            <p>View your academic performance and grades.</p>
            <button className="btn btn-primary">View Grades</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
