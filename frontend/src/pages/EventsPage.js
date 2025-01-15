import React, { useState } from "react";
import EventForm from "../components/events/EventForm";
import EventList from "../components/events/EventList";

const EventsPage = () => {
    const [showForm, setShowForm] = useState(false);
  
    return (
      <div className="p-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Events</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add New Event
          </button>
        </div>
        {showForm ? (
          <EventForm onClose={() => setShowForm(false)} />
        ) : (
          <EventList />
        )}
      </div>
    );
  };

export default EventsPage;