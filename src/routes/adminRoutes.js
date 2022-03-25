var express = require('express');
const upload = require('../middlewares/productMulter')
var router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/crear-editar', adminController.crearEditar);

router.get('/crear', adminController.crear);
router.post('/',
// upload.single('') //
adminController.guardar);

router.get('/editar-1', adminController.editar);
router.get('/editar-2',
// upload.single('') //
adminController.editar);



module.exports = router;

