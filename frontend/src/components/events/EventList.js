import React, { useState, useEffect } from "react";
import { getEvents, deleteEvent } from "../../services/eventServices";
import EventForm from "./EventForm";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null); // Track the event being edited
  const [showForm, setShowForm] = useState(false);

  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      fetchEvents(); // Refresh events after deletion
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      {showForm ? (
        <EventForm
          onClose={() => {
            setShowForm(false);
            setEditingEvent(null); // Reset editing event
            fetchEvents(); // Refresh list after update
          }}
          eventToEdit={editingEvent}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{event.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center text-gray-500 mb-2">
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-500">{event.location}</div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;