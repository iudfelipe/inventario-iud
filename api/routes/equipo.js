const express = require('express');
const router = express.Router();
const userController = require('../controllers/equipo');


router.post('/tipo/create', userController.createTipoEquipo);
router.post('/tipo/update', userController.updateTipoEquipo);
// router.get('/eliminar', userController.getEliminar);
// router.post('/eliminar', userController.postEliminar);

module.exports = router;