import React, { useState } from "react";
import AttendeeForm from "../components/attendees/AttendeeForm";
import AttendeeList from "../components/attendees/AttendeeList";

const AttendeesPage = () => {
    const [showForm, setShowForm] = useState(false);
  
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Attendees</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add New Attendee
          </button>
        </div>
        {showForm ? (
          <AttendeeForm onClose={() => setShowForm(false)} />
        ) : (
          <AttendeeList />
        )}
      </div>
    );
  };

export default AttendeesPage;