import React from 'react';

const mockAttendees = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Organizer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Speaker' },
];

const TaskForm = ({ onClose }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Task Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Assign To</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              {mockAttendees.map(attendee => (
                <option key={attendee.id} value={attendee.id}>{attendee.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Progress</label>
            <input
              type="range"
              min="0"
              max="100"
              className="mt-1 block w-full"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    );
  };

export default TaskForm;