import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar, handleLogout }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear token and auth state
    handleLogout();

    // Check if the token is cleared
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); // Redirect to login page
    } else {
      console.warn('Token not cleared from localStorage. Please investigate.');
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar} className="lg:hidden">
          <Menu size={24} />
        </button>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSignOut}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;