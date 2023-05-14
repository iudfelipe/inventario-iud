const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario');

router.get('/', inventarioController.getInventario);
router.post('/create', inventarioController.createInventario);
router.post('/update', inventarioController.updateInventario);

module.exports = router;