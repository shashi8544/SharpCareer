import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../utils/navbar/index';
import Footer from '../../utils/footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const StaffDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center">Staff Dashboard</h2>
        <div className="dashboard-container">
          <div className="dashboard-item">
            <h3>Course Management</h3>
            <p>Access tools for managing courses.</p>
            <button>Go to Courses</button>
          </div>
          <div className="dashboard-item">
            <h3>Communication Platforms</h3>
            <p>Access communication platforms for staff and students.</p>
            <button>Go to Communication</button>
          </div>
          <div className="dashboard-item">
            <h3>Administrative Resources</h3>
            <p>Access administrative resources.</p>
            <button>Go to Resources</button>
          </div>
          <div className="dashboard-item">
            <h3>Manage Registered Student</h3>
            <p>Manage and track registered students.</p>
            <Link to ="/staff/student-management"><button>Go to Student Management</button></Link>
          </div>
          <div className="dashboard-item">
            <h3>Manage Faculty</h3>
            <p>Manage and track faculty members.</p>
            <button>Go to Faculty Management</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaffDashboard;
