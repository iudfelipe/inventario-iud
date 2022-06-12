const express = require('express');
const router = express.Router();
const equipoController = require('../controllers/equipo');


router.get('/tipos/activo', equipoController.getTiposActivos);
router.get('/tipos', equipoController.getTipos);
router.post('/tipos/create', equipoController.createTipoEquipo);
router.post('/tipos/update', equipoController.updateTipoEquipo);
router.get('/estados/activo', equipoController.getEstadosActivos);
router.get('/estados/:id?', equipoController.getEstados);
router.post('/estados/create', equipoController.createEstadoEquipo);
router.post('/estados/update', equipoController.updateEstadoEquipo);

module.exports = router;