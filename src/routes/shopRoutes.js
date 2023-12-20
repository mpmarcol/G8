const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.vista);
router.get('/item/:id/add', shopControllers.adicion);
router.get('/cart', shopControllers.cart);

module.exports = router;
