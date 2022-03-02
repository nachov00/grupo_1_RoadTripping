var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/crear-editar', adminController.crearEditar);

router.get('/crear-1', adminController.crear1);
router.get('/crear-2', adminController.crear2);
router.get('/crear-3', adminController.crear3);
router.post('/1', adminController.guardar);
router.post('/2', adminController.guardar);
router.post('/3', adminController.guardar);

router.get('/editar', adminController.editar);


module.exports = router;

