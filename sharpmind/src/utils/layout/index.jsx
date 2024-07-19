// Layout.js
import React from 'react';
import Navbar from '../navbar/index';


function Layout({ children, currentPage }) {
  return (
    <div className="layout">
      <Navbar />
      
    </div>
  );
}

export default Layout;
