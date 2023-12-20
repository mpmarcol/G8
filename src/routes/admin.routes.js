const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.get('/', adminController.admin);
router.get('/create', adminController.create);
router.get('/edit/:id', adminController.edit);
router.get('/delete/:id', adminController.delete);

module.exports = router;
