// src/routes/AdminRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ isLoggedIn, role, children }) =>
  isLoggedIn && role === 'admin'
    ? children
    : <Navigate to="/" replace />;

export default AdminRoute;
