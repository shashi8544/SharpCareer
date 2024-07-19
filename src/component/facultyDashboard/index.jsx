import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../utils/navbar/index';
import Footer from '../../utils/footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const FacultyDashboard = () => {
  const { user } = useContext(UserContext); // Assuming user context includes email and token
  const [grades, setGrades] = useState([]);
  const [gradeInput, setGradeInput] = useState('');
  const [error, setError] = useState('');

  // Function to fetch grades from backend
  const fetchGrades = async () => {
    try {
      const response = await axios.get('http://localhost:4000/faculty/grades', {
        headers: {
          Authorization: `Bearer ${user.token}` // Assuming token is stored in user context
        }
      });
      setGrades(response.data.grades); // Assuming backend returns grades in response.data.grades
    } catch (error) {
      console.error('Error fetching grades:', error);
      setError('Error fetching grades. Please try again later.');
    }
  };

  // Function to submit grade
  const submitGrade = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/faculty/grades', { grade: gradeInput }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      // After successfully submitting grade, fetch updated grades
      fetchGrades();
      setGradeInput(''); // Clear input field
    } catch (error) {
      console.error('Error submitting grade:', error);
      setError('Error submitting grade. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center">Faculty Dashboard</h2>
        <div className="dashboard-container">
          <div className="dashboard-item">
            <h3>Grade Management</h3>
            <form onSubmit={submitGrade}>
              <div className="form-group">
                <label htmlFor="inputGrade">Enter Grade:</label>
                <input
                  type="text"
                  id="inputGrade"
                  className="form-control"
                  placeholder="Enter grade"
                  value={gradeInput}
                  onChange={(e) => setGradeInput(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-primary btn-block">Submit Grade</button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>}
          </div>
          <div className="dashboard-item">
            <h3>Academic Progress</h3>
            <ul>
              {grades.map((grade, index) => (
                <li key={index}>{grade}</li>
              ))}
            </ul>
            {grades.length === 0 && <p>No grades available.</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FacultyDashboard;
