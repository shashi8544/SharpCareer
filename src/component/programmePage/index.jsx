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
      <Navbar />
      <div className="main-page">
        <ProgramSidebar setSelectedSubProgram={setSelectedSubProgram} />
        <div className="program-content">
          {selectedSubProgram ? (
            <ProgramDetails selectedSubProgram={selectedSubProgram} />
          ) : (
            <div className="info-section">
              <div className="info-box">
                <h2>Application Process</h2>
                <ul>
                  <li>Step 1: Complete the online application form.</li>
                  <li>Step 2: Submit required documents (transcripts, letters of recommendation, etc.).</li>
                  <li>Step 3: Pay the application fee.</li>
                  <li>Step 4: Schedule and attend an interview, if required.</li>
                  <li>Step 5: Await admission decision via email.</li>
                </ul>
              </div>
              <div className="info-box">
                <h2>Eligibility Criteria</h2>
                <ul>
                  <li>Undergraduate Programs:
                    <ul>
                      <li>High school diploma or equivalent.</li>
                      <li>Minimum GPA requirement.</li>
                      <li>Standardized test scores (SAT/ACT) if applicable.</li>
                    </ul>
                  </li>
                  <li>Postgraduate Programs:
                    <ul>
                      <li>Bachelor's degree in relevant field.</li>
                      <li>Minimum GPA requirement.</li>
                      <li>Standardized test scores (GRE/GMAT) if applicable.</li>
                    </ul>
                  </li>
                  <li>PhD Programs:
                    <ul>
                      <li>Master's degree in relevant field.</li>
                      <li>Research proposal submission.</li>
                      <li>Letters of recommendation.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="info-box">
                <h2>Scholarship Opportunities</h2>
                <ul>
                  <li>Merit-based Scholarships:
                    <ul>
                      <li>Available for top-performing students.</li>
                      <li>Based on academic achievements and extracurricular involvement.</li>
                    </ul>
                  </li>
                  <li>Need-based Scholarships:
                    <ul>
                      <li>Available for students with financial need.</li>
                      <li>Based on family income and financial circumstances.</li>
                    </ul>
                  </li>
                  <li>Research Scholarships:
                    <ul>
                      <li>Available for students involved in research projects.</li>
                      <li>Based on the quality and impact of the research proposal.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
