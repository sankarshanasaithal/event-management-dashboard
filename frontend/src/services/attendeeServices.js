import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update with your backend base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch all attendees
export const fetchAttendees = async () => {
  try {
    const response = await api.get("/attendees");
    return response.data;
  } catch (error) {
    console.error("Error fetching attendees:", error.response?.data || error.message);
    throw error;
  }
};

// Add a new attendee
export const addAttendee = async (attendeeData) => {
  try {
    const response = await api.post("/attendees", attendeeData);
    return response.data;
  } catch (error) {
    console.error("Error adding attendee:", error.response?.data || error.message);
    throw error;
  }
};

// Remove an attendee by ID
export const removeAttendee = async (id) => {
  try {
    await api.delete(`/attendees/${id}`);
  } catch (error) {
    console.error("Error removing attendee:", error.response?.data || error.message);
    throw error;
  }
};
