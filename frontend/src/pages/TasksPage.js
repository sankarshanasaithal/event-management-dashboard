import React, { useState } from "react";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";

const TasksPage = () => {
    const [showForm, setShowForm] = useState(false);
  
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create New Task
          </button>
        </div>
        {showForm ? (
          <TaskForm onClose={() => setShowForm(false)} />
        ) : (
          <TaskList />
        )}
      </div>
    );
  };

export default TasksPage;