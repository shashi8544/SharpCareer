import React from 'react';
import Navbar from '../../../utils/navbar/index'
import Footer from '../../../utils/footer/index'
import './index.css';

export default function Departments() {
  return (
    <>
    <Navbar/>
    <div className="departments-container">
      <h1>Departments</h1>
      <div className="department-list">
        <div className="department">
          <h2>Department of Computer Science</h2>
          <p>Our Computer Science department offers cutting-edge programs and research opportunities in various fields such as AI, machine learning, and software development.</p>
        </div>
        <div className="department">
          <h2>Department of Mechanical Engineering</h2>
          <p>The Mechanical Engineering department provides a solid foundation in mechanical principles and offers advanced studies in robotics, materials science, and thermodynamics.</p>
        </div>
        <div className="department">
          <h2>Department of Business Administration</h2>
          <p>Our Business Administration department prepares students for leadership roles in the corporate world, offering courses in management, finance, marketing, and entrepreneurship.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
