import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ setAuthToken }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} />
      <div className="lg:ml-64">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} handleLogout={handleLogout} />
        <main className="p-4">
          <Outlet /> {/* Renders child routes like EventsPage, AttendeesPage */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;