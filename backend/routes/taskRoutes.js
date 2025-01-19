const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.createTask);
router.post('/tasks/bulk', taskController.createBulkTasks);
router.get('/events/:event_id/tasks', taskController.getEventTasks);
router.patch('/tasks/:task_id/status', taskController.updateTaskStatus);

module.exports = router;