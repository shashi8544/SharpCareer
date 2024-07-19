import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

//// pages import
import HomePage from '../component/homePage/index';
import ProgrammesPage from '../component/programmePage/index';
import Login from './login/index';
import StudentLogin from '../component/loginPages/studentLogin/index';
import FacultyLogin from '../component/loginPages/facultyLogin/index';
import StaffLogin from '../component/loginPages/staffLogin/index';
import StudentSignup from '../component/signupPages/studentSignup/index';
import FacultySignup from '../component/signupPages/facultySignup/index';
import StaffSignup from '../component/signupPages/staffSignup/index';
import ContactUs from '../component/contactUsPages/index';
import Institute from '../component/institutePages/index';
import InstituteDepartment from '../component/institutePages/departmentPages/index'
import InstituteOverview from '../component/institutePages/overviewPages/index'
import InstituteFaculty from '../component/institutePages/instituteFacultyPages/index'
import StudentDashboard from '../component/studentDashboardPages/index';
import StaffDashboard from '../component/staffDashboardPage/index';
import FacultyDashboard from '../component/facultyDashboard/index';
import AdmissionForm from '../component/admissionPages/index';
import StudentManagement from '../component/studentDashboardPages/studentManagement/index';
import EnrolledStudents from '../component/studentDashboardPages/studentManagement/enrolledStudent/index';
import CurrentStudents from '../component/studentDashboardPages/studentManagement/currentStudent/index';


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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/institute/overview" element={<InstituteOverview />} />
          <Route path="/institute/departments" element={<InstituteDepartment />} />
          <Route path="/institute/faculty" element={<InstituteFaculty />} />
          <Route path="/student/dashboard" element={<StudentDashboard />}/>
          <Route path="/staff/dashboard" element={<StaffDashboard />}/>
          <Route path="/faculty/dashboard" element={<FacultyDashboard />}/>
          <Route path="/admission" element={<AdmissionForm/>}/>
          <Route path="/staff/student-management" element={<StudentManagement />} />
          <Route path="/staff/student-management/enrolled-students" element={<EnrolledStudents />} />
          <Route path="/staff/student-management/current-students" element={<CurrentStudents/>} />
         
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default AppRouter;
