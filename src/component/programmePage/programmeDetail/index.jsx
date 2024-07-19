import React from 'react';
import './index.css';

const ProgramDetails = ({ selectedSubProgram }) => {
  const subProgramDetails = {
    'Computer Science Engineering': {
      title: 'Computer Science Engineering',
      details: 'Computer Science Engineering involves the study of computers and computational systems, including their theory, design, development, and application.',
      curriculum: 'The curriculum includes subjects like Algorithms, Data Structures, Operating Systems, Computer Networks, Databases, Artificial Intelligence, and Machine Learning.',
      faculty: [
        { name: 'Dr. John Doe', designation: 'Professor', image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Dr. Jane Smith', designation: 'Professor', image: 'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Dr. Emily Johnson', designation: 'Assistant Professor', image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D' }
      ],
      career: 'Graduates can work as Software Developers, System Analysts, Data Scientists, AI Specialists, Network Engineers, etc.',
      alumni: [
        { name: 'John Doe', successStory: 'CTO of a leading tech company', image: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D' },
        { name: 'Jane Smith', successStory: 'Senior Engineer at a multinational corporation', image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D' },
        { name: 'Michael Brown', successStory: 'Founder of a successful startup', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    },
    'Mechanical Engineering': {
      title: 'Mechanical Engineering',
      details: 'Mechanical Engineering involves the design, analysis, manufacturing, and maintenance of mechanical systems.',
      curriculum: 'The curriculum includes subjects like Thermodynamics, Fluid Mechanics, Material Science, Machine Design, Manufacturing Processes, and Robotics.',
      faculty: [
        { name: 'Dr. Alan Brown', designation: 'Professor', image: 'alan_brown.jpg' },
        { name: 'Dr. Emily White', designation: 'Professor', image: 'emily_white.jpg' },
        { name: 'Dr. Richard Lee', designation: 'Assistant Professor', image: 'richard_lee.jpg' }
      ],
      career: 'Graduates can work as Design Engineers, Project Managers, Manufacturing Engineers, Robotics Engineers, etc.',
      alumni: [
        { name: 'Alan Brown', successStory: 'Founder of a successful startup', image: 'alan_brown_alumni.jpg' },
        { name: 'Emily White', successStory: 'Lead Engineer at a top firm', image: 'emily_white_alumni.jpg' },
        { name: 'Sophia Clark', successStory: 'Chief Engineer at an automotive company', image: 'sophia_clark_alumni.jpg' }
      ]
    },
    'Civil Engineering': {
      title: 'Civil Engineering',
      details: 'Civil Engineering involves the design, construction, and maintenance of the physical and naturally built environment.',
      curriculum: 'The curriculum includes subjects like Structural Engineering, Geotechnical Engineering, Transportation Engineering, Environmental Engineering, and Construction Management.',
      faculty: [
        { name: 'Dr. Robert Brown', designation: 'Professor', image: 'robert_brown.jpg' },
        { name: 'Dr. Sarah Lee', designation: 'Professor', image: 'sarah_lee.jpg' },
        { name: 'Dr. William Harris', designation: 'Assistant Professor', image: 'william_harris.jpg' }
      ],
      career: 'Graduates can work as Structural Engineers, Construction Managers, Urban Planners, Environmental Engineers, etc.',
      alumni: [
        { name: 'Robert Brown', successStory: 'Lead Civil Engineer at a global construction firm', image: 'robert_brown_alumni.jpg' },
        { name: 'Sarah Lee', successStory: 'Director of a renowned engineering consultancy', image: 'sarah_lee_alumni.jpg' },
        { name: 'David Johnson', successStory: 'Senior Urban Planner', image: 'david_johnson_alumni.jpg' }
      ]
    },
    'Electrical Engineering': {
      title: 'Electrical Engineering',
      details: 'Electrical Engineering involves the study of electricity, electronics, and electromagnetism and their applications.',
      curriculum: 'The curriculum includes subjects like Circuit Analysis, Electromagnetics, Power Systems, Control Systems, Signal Processing, and Communication Systems.',
      faculty: [
        { name: 'Dr. Mark Taylor', designation: 'Professor', image: 'mark_taylor.jpg' },
        { name: 'Dr. Laura Wilson', designation: 'Professor', image: 'laura_wilson.jpg' },
        { name: 'Dr. James Martinez', designation: 'Assistant Professor', image: 'james_martinez.jpg' }
      ],
      career: 'Graduates can work as Electrical Engineers, Control Engineers, Power Systems Engineers, Electronics Engineers, etc.',
      alumni: [
        { name: 'Mark Taylor', successStory: 'Chief Engineer at a power generation company', image: 'mark_taylor_alumni.jpg' },
        { name: 'Laura Wilson', successStory: 'VP of Engineering at an electronics firm', image: 'laura_wilson_alumni.jpg' },
        { name: 'Kevin Brown', successStory: 'Lead Systems Engineer', image: 'kevin_brown_alumni.jpg' }
      ]
    },
    'Software Development': {
      title: 'Software Development',
      details: 'Software Development involves the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.',
      curriculum: 'The curriculum includes subjects like Software Engineering, Web Development, Mobile Application Development, Database Management, and Software Testing.',
      faculty: [
        { name: 'Dr. Karen Moore', designation: 'Professor', image: 'karen_moore.jpg' },
        { name: 'Dr. Brian Clark', designation: 'Professor', image: 'brian_clark.jpg' },
        { name: 'Dr. Amy Davis', designation: 'Assistant Professor', image: 'amy_davis.jpg' }
      ],
      career: 'Graduates can work as Software Developers, Web Developers, Mobile App Developers, QA Engineers, etc.',
      alumni: [
        { name: 'Karen Moore', successStory: 'Lead Developer at a software company', image: 'karen_moore_alumni.jpg' },
        { name: 'Brian Clark', successStory: 'CTO at a tech startup', image: 'brian_clark_alumni.jpg' },
        { name: 'Jessica Hall', successStory: 'Senior Software Engineer', image: 'jessica_hall_alumni.jpg' }
      ]
    },
    'Network Administration': {
      title: 'Network Administration',
      details: 'Network Administration involves managing and maintaining computer networks, ensuring network availability, and providing network-related support.',
      curriculum: 'The curriculum includes subjects like Network Design, Network Security, Server Administration, Cloud Computing, and Network Troubleshooting.',
      faculty: [
        { name: 'Dr. Michael Johnson', designation: 'Professor', image: 'michael_johnson.jpg' },
        { name: 'Dr. Rachel King', designation: 'Professor', image: 'rachel_king.jpg' },
        { name: 'Dr. Anthony Evans', designation: 'Assistant Professor', image: 'anthony_evans.jpg' }
      ],
      career: 'Graduates can work as Network Administrators, System Administrators, Network Security Specialists, Cloud Administrators, etc.',
      alumni: [
        { name: 'Michael Johnson', successStory: 'Network Manager at a leading IT company', image: 'michael_johnson_alumni.jpg' },
        { name: 'Rachel King', successStory: 'Senior Network Engineer', image: 'rachel_king_alumni.jpg' },
        { name: 'Daniel Garcia', successStory: 'Cloud Administrator', image: 'daniel_garcia_alumni.jpg' }
      ]
    },
    'Business Administration': {
      title: 'Business Administration',
      details: 'Business Administration involves managing and overseeing business operations and related fields such as finance, marketing, and human resources.',
      curriculum: 'The curriculum includes subjects like Management Principles, Business Ethics, Financial Accounting, Marketing Management, and Human Resource Management.',
      faculty: [
        { name: 'Dr. William Anderson', designation: 'Professor', image: 'william_anderson.jpg' },
        { name: 'Dr. Emily Johnson', designation: 'Professor', image: 'emily_johnson.jpg' },
        { name: 'Dr. Matthew Lee', designation: 'Assistant Professor', image: 'matthew_lee.jpg' }
      ],
      career: 'Graduates can work as Business Managers, Financial Analysts, Marketing Managers, HR Managers, etc.',
      alumni: [
        { name: 'William Anderson', successStory: 'CEO of a multinational company', image: 'william_anderson_alumni.jpg' },
        { name: 'Emily Johnson', successStory: 'Director of Operations', image: 'emily_johnson_alumni.jpg' },
        { name: 'Christopher Brown', successStory: 'Senior Financial Analyst', image: 'christopher_brown_alumni.jpg' }
      ]
    },
    'Hospitality Management': {
      title: 'Hospitality Management',
      details: 'Hospitality Management involves overseeing the administrative tasks of a hotel or resort, including managing staff, business operations, and guest services.',
      curriculum: 'The curriculum includes subjects like Hotel Management, Food and Beverage Management, Event Planning, Hospitality Marketing, and Tourism Management.',
      faculty: [
        { name: 'Dr. Daniel Wilson', designation: 'Professor', image: 'daniel_wilson.jpg' },
        { name: 'Dr. Sophia Martinez', designation: 'Professor', image: 'sophia_martinez.jpg' },
        { name: 'Dr. Olivia Clark', designation: 'Assistant Professor', image: 'olivia_clark.jpg' }
      ],
      career: 'Graduates can work as Hotel Managers, Event Planners, Food and Beverage Managers, Tourism Managers, etc.',
      alumni: [
        { name: 'Daniel Wilson', successStory: 'General Manager at a luxury hotel', image: 'daniel_wilson_alumni.jpg' },
        { name: 'Sophia Martinez', successStory: 'Director of Hospitality at a resort', image: 'sophia_martinez_alumni.jpg' },
        { name: 'James Taylor', successStory: 'Event Planner at a renowned event management company', image: 'james_taylor_alumni.jpg' }
      ]
    }
    
  };

  return (
    <div className="program-details-container">
      <h2>{subProgramDetails[selectedSubProgram].title}</h2>
      <p>{subProgramDetails[selectedSubProgram].details}</p>
      <h3>Curriculum</h3>
      <p>{subProgramDetails[selectedSubProgram].curriculum}</p>
      <h3>Faculty</h3>
      <ul className="faculty-list">
        {subProgramDetails[selectedSubProgram].faculty.map((faculty, index) => (
          <li key={index} className="faculty-item">
            <img src={`${faculty.image}`} alt={faculty.name} className="faculty-image"/>
            <p>{faculty.name} - {faculty.designation}</p>
          </li>
        ))}
      </ul>
      <h3>Career Prospects</h3>
      <p>{subProgramDetails[selectedSubProgram].career}</p>
      <h3>Alumni</h3>
      <ul className="alumni-list">
        {subProgramDetails[selectedSubProgram].alumni.map((alumnus, index) => (
          <li key={index} className="alumni-item">
            <img src={`${alumnus.image}`} alt={alumnus.name} className="alumni-image"/>
            <p>{alumnus.name} - {alumnus.successStory}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramDetails;