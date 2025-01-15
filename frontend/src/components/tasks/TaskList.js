import React from 'react';

const mockTasks = [
    { 
      id: 1, 
      eventId: 1,
      title: 'Prepare presentation slides',
      assignee: 'John Doe',
      status: 'pending',
      progress: 60
    },
    {
      id: 2,
      eventId: 1,
      title: 'Book venue',
      assignee: 'Jane Smith',
      status: 'completed',
      progress: 100
    },
  ];

const TaskList = () => {
    return (
      <div className="space-y-4">
        {mockTasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-500">Assigned to: {task.assignee}</p>
              </div>
              <span className={`px-2 py-1 rounded text-sm ${
                task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {task.status}
              </span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {task.progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${task.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="text-blue-600 hover:text-blue-800">Update Progress</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default TaskList;