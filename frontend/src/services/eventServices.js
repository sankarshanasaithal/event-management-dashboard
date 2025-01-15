import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update with your backend base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch all events
export const getEvents = async () => {
  const response = await api.get("/events");
  return response.data;
};

// Create a new event
export const createEvent = async (event) => {
  const response = await api.post("/events", event);
  return response.data;
};

// Update an event
export const updateEvent = async (id, event) => {
  const response = await api.put(`/events/${id}`, event);
  return response.data;
};

// Delete an event
export const deleteEvent = async (id) => {
  const response = await api.delete(`/events/${id}`);
  return response.data;
};
