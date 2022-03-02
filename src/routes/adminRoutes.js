var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/crear-editar', adminController.crearEditar);
router.get('/crear', adminController.crear);
router.post('/', adminController.guardar);
router.get('/editar', adminController.editar);


module.exports = router;

