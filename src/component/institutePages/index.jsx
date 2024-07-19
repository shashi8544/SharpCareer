import React from 'react';
import Navbar from '../../utils/navbar/index'
import Footer from '../../utils/footer/index'
import './index.css';

export default function Institute() {
  return (
    <>
    <Navbar/>
    <div className="institute-container">
      <h1>Welcome to SharpMind Institute</h1>
      <div className="video-container">
        <h2>Virtual Tour</h2>
        <iframe
          className="tour-video"
          src="https://www.youtube.com/embed/your-video-id"
          title="Virtual Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="sections">
        <div className="section">
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, eros ut cursus vehicula, ex ante interdum libero, at luctus risus neque sit amet nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <a href="/institute/overview" className="button">Read More</a>
        </div>
        <div className="section">
          <h2>Departments</h2>
          <p>Our institute offers a variety of departments catering to different fields of study. From engineering to humanities, our departments are equipped with state-of-the-art facilities and experienced faculty.</p>
          <a href="/institute/departments" className="button">Explore Departments</a>
        </div>
        <div className="section">
          <h2>Faculty</h2>
          <p>Our faculty members are experts in their fields, dedicated to providing the best education and guidance to our students. They are involved in cutting-edge research and bring real-world experience into the classroom.</p>
          <a href="/institute/faculty" className="button">Meet Our Faculty</a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
