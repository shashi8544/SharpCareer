import React from 'react';
import Navbar from '../../../utils/navbar/index'
import Footer from '../../../utils/footer/index'
import './index.css';

export default function Faculty() {
  return (
    <>
    <Navbar/>
    <div className="faculty-container">
      <h1>Our Faculty</h1>
      <div className="faculty-list">
        <div className="faculty-member">
          <img src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=" alt="Faculty Member" className="faculty-image" />
          <h2>Dr. John Doe</h2>
          <p>Dr. John Doe is a professor of Computer Science, specializing in artificial intelligence and machine learning. He has over 20 years of teaching experience and numerous publications in top-tier journals.</p>
        </div>
        <div className="faculty-member">
          <img src="https://media.istockphoto.com/id/1485050002/photo/portrait-of-a-senior-adult-black-female-on-a-city-street-looking-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=b4Yde_LBgDMuMZL9LLI9QCr1X8cfGTIoLn5kzmGOZRw=" alt="Faculty Member" className="faculty-image" />
          <h2>Dr. Jane Smith</h2>
          <p>Dr. Jane Smith is a professor of Mechanical Engineering, with expertise in robotics and materials science. She has led several research projects and has been recognized for her innovative work in the field.</p>
        </div>
        <div className="faculty-member">
          <img src="https://media.istockphoto.com/id/1244524447/photo/successful-casual-business-woman-smiling.webp?b=1&s=170667a&w=0&k=20&c=-5klg-wppeDUyNWG5zQwWiOpyvqQcxEVJ4A4Lc-4Zfg=" alt="Faculty Member" className="faculty-image" />
          <h2>Dr. Michael Brown</h2>
          <p>Dr. Michael Brown is a professor of Business Administration, focusing on management and entrepreneurship. He has a wealth of experience in the corporate sector and has mentored many successful entrepreneurs.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
