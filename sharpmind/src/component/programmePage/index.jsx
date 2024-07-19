import React, { useState } from 'react';
import ProgramSidebar from './programmeSidebar/index';
import ProgramDetails from './programmeDetail/index';
import Navbar from '../../utils/navbar';
import Footer from '../../utils/footer';
import './index.css';

const MainPage = () => {
  const [selectedSubProgram, setSelectedSubProgram] = useState(null);

  return (
    <>
    <Navbar/>
    <div className="main-page">
      <ProgramSidebar setSelectedSubProgram={setSelectedSubProgram} />
      <div className="program-content">
        {selectedSubProgram ? (
          <ProgramDetails selectedSubProgram={selectedSubProgram} />
        ) : (
          <p>Please select a program and a sub-branch to view details.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MainPage;
