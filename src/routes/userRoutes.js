var express = require('express');
const upload = require('../middleware/userMulter')
var router = express.Router();
const userController = require("../controllers/userController");
const multer = requiere('multer')
const { check } = require('express-validator');


router.get('/login', userController.login);
router.post('/login')

//---- Repetir para cada validacion a excepcion de la validacion del email----//
router.post('/registrarse', [
    check('Nombre').notEmpty().withMessage('No debe estar vacio.')
        .bail().isLength({ min: 2 }).withMessage('Debe contener al menos 2 caracteres.'),
],
    userController.register);

//----//
router.get('/preregistro', userController.preregister);

router.get('/Term&Cond', userController.TermCond);
router.get('/Privacidad', userController.Privacy);

router.get('/misdatos', userController.userData);
router.get('/mismillas', userController.userMillas);
router.get('/miscompras', userController.userCompras);
router.get('/favoritos', userController.userFav);
router.get('/seguridad', userController.userSeg);
router.get('/notificaciones', userController.userNotif);


module.exports = router;
