const express = require('express');
const { login, validateToken } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.get('/validate-token', validateToken);

module.exports = router;