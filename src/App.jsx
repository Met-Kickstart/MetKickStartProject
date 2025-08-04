// src/App.jsx
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom';

import Welcome           from './pages/Welcome';
import StudentDashboard  from './pages/StudentDashboard';
import AdminDashboard    from './pages/AdminDashboard';

// route guards (see next code block)
import StudentRoute from './routes/StudentRoute';
import AdminRoute   from './routes/AdminRoute';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole,   setUserRole]   = useState(null);
  const navigate = useNavigate();

  // ——— authentication helpers ———
  const handleLoginSuccess = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);

    if (role === 'student') {
      navigate('/student-dashboard');
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    navigate('/');
  };

  // ——— routes ———
  return (
    <Routes>
      <Route
        path="/"
        element={<Welcome onLoginSuccess={handleLoginSuccess} />}
      />

      <Route
        path="/student-dashboard"
        element={
          <StudentRoute isLoggedIn={isLoggedIn} role={userRole}>
            <StudentDashboard onLogout={handleLogout} />
          </StudentRoute>
        }
      />

      <Route
        path="/admin-dashboard"
        element={
          <AdminRoute isLoggedIn={isLoggedIn} role={userRole}>
            <AdminDashboard onLogout={handleLogout} />
          </AdminRoute>
        }
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppWrapper;
