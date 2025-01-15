import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check for token in localStorage

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to login page if no token
  }

  return children; // Render the protected component
};

export default ProtectedRoute;