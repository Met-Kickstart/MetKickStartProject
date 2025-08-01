import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Welcome from './pages/welcome';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginModal from './components/LoginModal';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    if (role === 'student') {
      navigate('/student-dashboard');
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome onLoginSuccess={handleLoginSuccess} />} />
        <Route
          path="/student-dashboard"
          element={
            isLoggedIn && userRole === 'student' ? (
              <StudentDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            isLoggedIn && userRole === 'admin' ? (
              <AdminDashboard onLogout={handleLogout} />
            ) : (
              <Welcome
                onLoginSuccess={handleLoginSuccess}
              />
            )
          }
        />
        {/* ...other routes... */}
      </Routes>
    </>
  );
}

export default AppWrapper;
