const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');


router.get('/activo', usuarioController.getUsuariosActivos);
router.get('/', usuarioController.getUsuarios);
router.post('/create', usuarioController.createUsuario);
router.post('/update', usuarioController.updateUsuario);

module.exports = router;