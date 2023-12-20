const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');


router.get('/login', authControllers.login);
router.get('/register', authControllers.register);

module.exports = router;