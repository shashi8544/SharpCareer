import React from 'react';
import Navbar from '../../../utils/navbar/index';
import Footer from '../../../utils/footer/index';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const StudentManagement = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center mt-5">Student Management</h2>
        <div className="management-container mt-4">
          <div className="management-item">
            <h3>Enrolled Students</h3>
            <p>View and manage enrolled students.</p>
            <Link to='/staff/student-management/enrolled-students'><button className="btn btn-primary">Go to Enrolled Students</button></Link>
          </div>
          <div className="management-item">
            <h3>Current Students</h3>
            <p>View and manage current students.</p>
            <Link to='/staff/student-management/current-students'><button className="btn btn-primary">Go to Current Students</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentManagement;
