// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// page components
import Home               from '../pages/Home';
import About              from '../pages/About';
import Programs           from '../pages/Programs';
import Admissions         from '../pages/Admissions';
import Research           from '../pages/Research';
import CampusLife         from '../pages/CampusLife';
import PlacementBrochure  from '../pages/PlacementBrochure';
import RecruiterInfo      from '../pages/RecruiterInfo';
import StudentPreparation from '../pages/StudentPreparation';
import PastRecruiters     from '../pages/PastRecruiters';
import PlacementPolicy    from '../pages/PlacementPolicy';
import Login              from '../pages/Login';
import Dashboard          from '../pages/Dashboard';
import NotFound           from '../pages/NotFound';
import Welcome            from '../pages/welcome';
import AdminDashboard     from '../pages/AdminDashboard';
import StudentDashboard   from '../pages/StudentDashboard';

import ProtectedRoute     from './ProtectedRoute';   // optional
import AdminRoute         from './AdminRoute';
import StudentRoute       from './StudentRoute';

const AppRoutes = ({ isLoggedIn }) => (
  <Routes>
    {/* public pages */}
    <Route path="/"            element={<Home />} />
    <Route path="/about"       element={<About />} />
    <Route path="/programs"    element={<Programs />} />
    <Route path="/admissions"  element={<Admissions />} />
    <Route path="/research"    element={<Research />} />
    <Route path="/campus-life" element={<CampusLife />} />

    {/* placement pages */}
    <Route path="/placement-brochure"  element={<PlacementBrochure />} />
    <Route path="/recruiter-info"      element={<RecruiterInfo />} />
    <Route path="/student-preparation" element={<StudentPreparation />} />
    <Route path="/past-recruiters"     element={<PastRecruiters />} />
    <Route path="/placement-policy"    element={<PlacementPolicy />} />

    {/* auth & protected */}
    <Route path="/login" element={<Login />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    {/* Admin and Student routes */}
    <Route 
      path="/admin/dashboard/*" 
      element={
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      } 
    />
    <Route 
      path="/student/dashboard/*" 
      element={
        <StudentRoute>
          <StudentDashboard />
        </StudentRoute>
      } 
    />

    {/* fallback 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
