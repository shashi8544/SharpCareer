import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Sharpmind Institute is dedicated to providing the best educational
            experience for our students. Our programs are designed to help you
            succeed in your chosen career.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li><strong>Email:</strong> info@sharpmindinstitute.com</li>
            <li><strong>Phone:</strong> +123-456-7890</li>
            <li><strong>Address:</strong> 1234 Street Name, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sharpmind Institute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
