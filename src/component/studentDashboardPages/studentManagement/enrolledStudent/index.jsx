import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../../utils/navbar/index';
import Footer from '../../../../utils/footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const EnrolledStudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/enrolled-students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.post(`http://localhost:4000/enrolled-students/${id}/accept`);
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error('Error accepting student:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`http://localhost:4000/enrolled-students/${id}/reject`);
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error('Error rejecting student:', error);
    }
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center mt-5">Enrolled Students</h2>
        <div className="student-list mt-4">
          {students.map(student => (
            <div key={student._id} className="student-item">
              <p className="student-rollno" onClick={() => handleStudentClick(student)}>
                {student.rollNo}
              </p>
              <button className="btn btn-success" onClick={() => handleAccept(student._id)}>Accept</button>
              <button className="btn btn-danger" onClick={() => handleReject(student._id)}>Reject</button>
            </div>
          ))}
        </div>
        {selectedStudent && (
          <div className="student-details mt-4">
            <h3>Details for {selectedStudent.rollNo}</h3>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Email:</strong> {selectedStudent.email}</p>
            <p><strong>Program:</strong> {selectedStudent.program}</p>
            <p><strong>Sub Branch:</strong> {selectedStudent.subBranch}</p>
            <p><strong>10th Marks:</strong> {selectedStudent.marks10}</p>
            <p><strong>12th Marks:</strong> {selectedStudent.marks12}</p>
            <p><strong>Selection Status:</strong> {selectedStudent.selectionStatus ? 'Accepted' : 'Pending'}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default EnrolledStudents;
