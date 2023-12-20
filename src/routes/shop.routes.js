const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

router.get('/', shopController.shop);
router.get('/item/:id', shopController.vista);
router.get('/item/:id/add', shopController.adicion);
router.get('/cart', shopController.cart);

module.exports = router;
