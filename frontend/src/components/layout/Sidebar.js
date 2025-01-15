import React from 'react';
import { Calendar, Users, CheckSquare} from 'lucide-react';

// Sidebar Component
const Sidebar = ({ isOpen }) => (
    <div className={`fixed left-0 top-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-8">Event Dashboard</h2>
        <nav>
          <a href="/events" className="flex items-center p-3 mb-4 hover:bg-gray-700 rounded">
            <Calendar className="mr-3" size={20} />
            Events
          </a>
          <a href="/attendees" className="flex items-center p-3 mb-4 hover:bg-gray-700 rounded">
            <Users className="mr-3" size={20} />
            Attendees
          </a>
          <a href="/tasks" className="flex items-center p-3 mb-4 hover:bg-gray-700 rounded">
            <CheckSquare className="mr-3" size={20} />
            Tasks
          </a>
        </nav>
      </div>
    </div>
  );

export default Sidebar;