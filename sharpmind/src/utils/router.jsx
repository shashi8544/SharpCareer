import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from '../component/homePage/index';
import ProgrammesPage from '../component/programmePage/index';
import Login from './login/index';
import StudentLogin from '../component/loginPages/studentLogin/index';
import FacultyLogin from '../component/loginPages/facultyLogin/index';
import StaffLogin from '../component/loginPages/staffLogin/index';
import StudentSignup from '../component/signupPages/studentSignup/index';
import FacultySignup from '../component/signupPages/facultySignup/index';
import StaffSignup from '../component/signupPages/staffSignup/index';
export const UserContext = React.createContext();

function AppRouter() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programme" element={<ProgrammesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/faculty" element={<FacultyLogin />} />
          <Route path="/login/staff" element={<StaffLogin />} />
          <Route path="/signup/student" element={<StudentSignup />} />
          <Route path="/signup/faculty" element={<FacultySignup />} />
          <Route path="/signup/staff" element={<StaffSignup />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default AppRouter;
