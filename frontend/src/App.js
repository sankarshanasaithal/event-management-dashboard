import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { validateToken } from './services/authServices';
import DashboardLayout from './components/layout/DashboardLayout';
import EventsPage from './pages/EventsPage';
import AttendeesPage from './pages/AttendeesPage';
import TasksPage from './pages/TasksPage';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check token validity
  useEffect(() => {
    const checkAuth = async () => {
      if (authToken) {
        try {
          await validateToken(authToken);
          setIsAuthenticated(true);
        } catch {
          localStorage.removeItem('token');
          setAuthToken(null);
          setIsAuthenticated(false);
        }
      }
    };
    checkAuth();
  }, [authToken]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          // If not authenticated, show login page
          <Route path="*" element={<LoginPage setAuthToken={setAuthToken} />} />
        ) : (
          // If authenticated, render dashboard layout
          <Route
            path="/"
            element={
              <DashboardLayout setAuthToken={setAuthToken} handleLogout={handleLogout} />
            }
          >
            <Route path="events" element={<EventsPage />} />
            <Route path="attendees" element={<AttendeesPage />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="/" element={<Navigate to="/events" />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;