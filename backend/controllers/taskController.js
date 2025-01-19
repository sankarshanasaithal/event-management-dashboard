const db = require('../config/db');

// Create a Task
exports.createTask = (req, res) => {
  const { event_id, title, description, due_date, priority, attendee_ids } = req.body;

  // First check if event exists
  db.query('SELECT id FROM events WHERE id = ?', [event_id], (err, eventResults) => {
    if (err) return res.status(500).json({ error: err.message });
    if (eventResults.length === 0) return res.status(404).json({ message: 'Event not found' });

    // Create the task
    const taskSql = 'INSERT INTO tasks (event_id, title, description, due_date, priority) VALUES (?, ?, ?, ?, ?)';
    db.query(taskSql, [event_id, title, description, due_date, priority], (err, taskResult) => {
      if (err) return res.status(500).json({ error: err.message });

      const taskId = taskResult.insertId;

      // If attendees are specified, create task assignments
      if (attendee_ids && attendee_ids.length > 0) {
        const assignmentValues = attendee_ids.map(attendee_id => [taskId, attendee_id]);
        const assignmentSql = 'INSERT INTO task_assignments (task_id, attendee_id) VALUES ?';

        db.query(assignmentSql, [assignmentValues], (err) => {
          if (err) return res.status(500).json({ error: err.message });
          res.status(201).json({ 
            message: 'Task created and assigned successfully', 
            taskId: taskId 
          });
        });
      } else {
        res.status(201).json({ 
          message: 'Task created successfully', 
          taskId: taskId 
        });
      }
    });
  });
};

// Get all tasks for an Event
exports.getEventTasks = (req, res) => {
  const { event_id } = req.params;

  const sql = `
    SELECT 
      t.*,
      GROUP_CONCAT(DISTINCT a.name) as assigned_to,
      GROUP_CONCAT(DISTINCT a.id) as attendee_ids
    FROM tasks t
    LEFT JOIN task_assignments ta ON t.id = ta.task_id
    LEFT JOIN attendees a ON ta.attendee_id = a.id
    WHERE t.event_id = ?
    GROUP BY t.id
  `;

  db.query(sql, [event_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (results.length === 0) {
      return res.status(404).json({ message: 'No tasks found for this event' });
    }

    // Format the results to parse the GROUP_CONCAT results
    const formattedResults = results.map(task => ({
      ...task,
      assigned_to: task.assigned_to ? task.assigned_to.split(',') : [],
      attendee_ids: task.attendee_ids ? task.attendee_ids.split(',').map(Number) : []
    }));

    res.status(200).json(formattedResults);
  });
};

// Update Task Status
exports.updateTaskStatus = (req, res) => {
  const { task_id } = req.params;
  const { status } = req.body;

  // Validate status
  const validStatuses = ['pending', 'in_progress', 'completed'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ 
      message: 'Invalid status. Must be pending, in_progress, or completed' 
    });
  }

  const sql = 'UPDATE tasks SET status = ? WHERE id = ?';
  
  db.query(sql, [status, task_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ 
      message: 'Task status updated successfully',
      status: status
    });
  });
};

// Create multiple tasks at once
exports.createBulkTasks = (req, res) => {
  const { event_id, tasks } = req.body;

  // First check if event exists
  db.query('SELECT id FROM events WHERE id = ?', [event_id], (err, eventResults) => {
    if (err) return res.status(500).json({ error: err.message });
    if (eventResults.length === 0) return res.status(404).json({ message: 'Event not found' });

    // Prepare bulk insert values
    const taskValues = tasks.map(task => [
      event_id,
      task.title,
      task.description,
      task.due_date,
      task.priority || 'medium'
    ]);

    const taskSql = 'INSERT INTO tasks (event_id, title, description, due_date, priority) VALUES ?';

    db.query(taskSql, [taskValues], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({
        message: `${result.affectedRows} tasks created successfully`,
        firstTaskId: result.insertId
      });
    });
  });
};
