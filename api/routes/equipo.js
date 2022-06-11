const express = require('express');
const router = express.Router();
const userController = require('../controllers/equipo');


router.get('/tipos/:id?', userController.getTipos);
router.post('/tipo/create', userController.createTipoEquipo);
router.post('/tipo/update', userController.updateTipoEquipo);
// router.post('/eliminar', userController.postEliminar);

module.exports = router;