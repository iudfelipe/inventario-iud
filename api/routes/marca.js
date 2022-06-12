const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marca');


router.get('/activo', marcaController.getMarcasActivas);
router.get('/', marcaController.getMarcas);
router.post('/create', marcaController.createMarca);
router.post('/update', marcaController.updateMarca);

module.exports = router;