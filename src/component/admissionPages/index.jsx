import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    rollNo: '',
    name: '',
    email: '',
    program: '',
    subBranch: '',
    marks10: '',
    marks12: '',
    selectionStatus: false
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/apply/apply', formData);
      setMessage('Application submitted successfully');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage('Roll number already applied');
      } else {
        setMessage('Error submitting application');
      }
    }
  };

  return (
    <div className="admission-form-container">
      <h2>Apply for Admission</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>12th Roll No</label>
          <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Program</label>
          <select name="program" value={formData.program} onChange={handleChange} required>
            <option value="">Select Program</option>
            <option value="BTech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="Management">Management</option>
          </select>
        </div>
        <div className="form-group">
          <label>Sub-Branch</label>
          <input type="text" name="subBranch" value={formData.subBranch} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Marks in 10th</label>
          <input type="number" name="marks10" value={formData.marks10} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Marks in 12th</label>
          <input type="number" name="marks12" value={formData.marks12} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn1 btn1-primary">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdmissionForm;
