const db = require('../config/db');

// Create an Event
exports.createEvent = (req, res) => {
  const { name, description, location, date } = req.body;
  const sql = 'INSERT INTO events (name, description, location, date) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, description, location, date], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Event created successfully', eventId: result.insertId });
  });
};

// Get All Events
exports.getAllEvents = (req, res) => {
  const sql = 'SELECT * FROM events';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Update an Event
exports.updateEvent = (req, res) => {
  const { id } = req.params;
  const { name, description, location, date } = req.body;
  const sql = 'UPDATE events SET name = ?, description = ?, location = ?, date = ? WHERE id = ?';
  db.query(sql, [name, description, location, date, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event updated successfully' });
  });
};

// Delete an Event
exports.deleteEvent = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM events WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully' });
  });
};