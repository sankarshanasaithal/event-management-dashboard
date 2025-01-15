const db = require("../config/db");

// Get all attendees
exports.getAttendees = async (req, res) => {
  try {
    const [attendees] = await db.query("SELECT * FROM attendees");
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch attendees." });
  }
};

// Add a new attendee
exports.addAttendee = async (req, res) => {
  const { name, email, role } = req.body;

  try {
    await db.query("INSERT INTO attendees (name, email, role) VALUES (?, ?, ?)", [
      name,
      email,
      role,
    ]);
    res.status(201).json({ message: "Attendee added successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to add attendee. Email must be unique." });
  }
};

// Delete an attendee
exports.deleteAttendee = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM attendees WHERE id = ?", [id]);
    res.status(200).json({ message: "Attendee deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete attendee." });
  }
};

// Update an attendee
exports.updateAttendee = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    await db.query(
      "UPDATE attendees SET name = ?, email = ?, role = ? WHERE id = ?",
      [name, email, role, id]
    );
    res.status(200).json({ message: "Attendee updated successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to update attendee." });
  }
};