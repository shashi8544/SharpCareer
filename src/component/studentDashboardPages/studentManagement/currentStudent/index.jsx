import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../../utils/navbar/index';
import Footer from '../../../../utils/footer/index';
import FeeFormModal from './currentStudentFeeModel/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const CurrentStudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/current-students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleAddFeeClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (email,rollNo, feeType, feeAmount) => {
    try {
      await axios.post('http://localhost:4000/student-fee', {
        email,
        rollNo,
        feeType,
        feeAmount,
        paymentStatus: 'Pending'
      });
      handleModalClose();
    } catch (error) {
      console.error('Error adding fee:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center mt-5">Current Students</h2>
        <div className="student-list mt-4">
          {students.map(student => (
            <div key={student._id} className="student-item">
              <p className="student-rollno" onClick={() => handleStudentClick(student)}>
                {student.rollNo} - {student.course}
              </p>
            </div>
          ))}
        </div>
        {selectedStudent && (
          <div className="student-details mt-4">
            <h3>Details for {selectedStudent.rollNo}</h3>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Email:</strong> {selectedStudent.email}</p>
            <p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
            <p><strong>Course:</strong> {selectedStudent.course}</p>
            <p><strong>Fee:</strong> {selectedStudent.fee}</p>
            <p><strong>Grade:</strong> {selectedStudent.grade}</p>
            <button className="btn btn-primary" onClick={handleAddFeeClick}>Add Fee</button>
          </div>
        )}
      </div>
      <Footer />
      <FeeFormModal
        show={showModal}
        handleClose={handleModalClose}
        student={selectedStudent}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default CurrentStudents;
