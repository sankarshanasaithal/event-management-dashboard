import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; 

const api = axios.create({
 baseURL: API_BASE_URL,
});

// Create a new task
export const createTask = async (task) => {
 const response = await api.post("/tasks", task);
 return response.data;
};

// Create multiple tasks
export const createBulkTasks = async (tasks) => {
 const response = await api.post("/tasks/bulk", tasks);
 return response.data;
};

// Fetch all tasks for an event
export const getEventTasks = async (eventId) => {
 const response = await api.get(`/events/${eventId}/tasks`);
 return response.data;
};

// Update task status
export const updateTaskStatus = async (taskId, status) => {
 const response = await api.patch(`/tasks/${taskId}/status`, { status });
 return response.data;
};

// Example usage of error handling
export const tryCreateTask = async (task) => {
 try {
   const response = await createTask(task);
   return {
     success: true,
     data: response
   };
 } catch (error) {
   return {
     success: false,
     error: error.response?.data?.message || "Failed to create task"
   };
 }
};

// Example of a more complex task creation with attendees
export const createTaskWithAttendees = async (taskData, attendeeIds) => {
 const task = {
   ...taskData,
   attendee_ids: attendeeIds
 };
 
 const response = await api.post("/tasks", task);
 return response.data;
};