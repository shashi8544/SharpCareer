import React, { useState } from 'react';
import './index.css';

const ProgramSidebar = ({ setSelectedSubProgram }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const programs = {
    BTech: ['Computer Science Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering'],
    BCA: ['Software Development', 'Network Administration'],
    Management: ['Business Administration', 'Hospitality Management']
  };

  const handleProgramSelection = (program) => {
    setSelectedProgram(program);
    setSelectedSubProgram(null); // Reset sub-program selection
  };

  return (
    <div className="program-sidebar">
      <div className="program-sidebar-box">
        <h2>Programmes</h2>
        <ul>
          {Object.keys(programs).map((program) => (
            <li
              key={program}
              className={selectedProgram === program ? 'selected' : ''}
              onClick={() => handleProgramSelection(program)}
            >
              {program}
            </li>
          ))}
        </ul>
        {selectedProgram && (
          <div className="sub-program-sidebar">
            <h3>{selectedProgram} Sub-Branches</h3>
            <ul>
              {programs[selectedProgram].map((subProgram) => (
                <li
                  key={subProgram}
                  onClick={() => setSelectedSubProgram(subProgram)}
                >
                  {subProgram}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramSidebar;
