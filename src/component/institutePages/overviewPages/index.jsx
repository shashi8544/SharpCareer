import React from 'react';
import Navbar from '../../../utils/navbar/index'
import Footer from '../../../utils/footer/index'
import './index.css';

export default function Overview() {
  return (
    <>
    <Navbar/>
    <div className="overview-container">
      <h1>SharpMind Institute</h1>
      <p>
        Our institute is committed to providing top-quality education and fostering an environment of innovation and excellence. With state-of-the-art facilities and a diverse range of programs, we aim to nurture the leaders of tomorrow.
      </p>
      <p>
        Founded in 1990, our institute has grown to become a hub of academic and research excellence. We offer a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines.
      </p>
      <img src="https://images.unsplash.com/photo-1592069915234-2a5c74fbd347?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" alt="Institute Overview" className="overview-image" />
    </div>
    <Footer/>
    </>
  );
}
