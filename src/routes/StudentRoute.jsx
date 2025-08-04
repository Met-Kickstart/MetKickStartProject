// src/routes/StudentRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const StudentRoute = ({ isLoggedIn, role, children }) =>
  isLoggedIn && role === 'student'
    ? children
    : <Navigate to="/" replace />;

export default StudentRoute;
