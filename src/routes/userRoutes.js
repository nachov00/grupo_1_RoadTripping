var express = require('express');
const upload = require('../middleware/userMulter')
var router = express.Router();
const userController = require("../controllers/userController");
const multer = requiere('multer')
const { check } = require('express-validator');
const db = require('../database/models');
const res = require('express/lib/response');

const usuarios = db.usuarios


router.get('/login', userController.login);
router.post('/login')

//---- Repetir para cada validacion a excepcion de la validacion del email----//
router.post('/registrarse', [
    check('Nombre').notEmpty().withMessage('No debe estar vacio.')
        .bail().isLength({ min: 2 }).withMessage('Debe contener al menos 2 caracteres.'),
    check('password').notEmpty().withMessage('No debe estar vacio.')
        .bail().isLength({ min: 8 }).withMessage('Debe contener al menos 8 caracteres.'),
    check('email').notEmpty().withMessage('No debe estar vacio.')
        .bail().isEmail().withMessage('Debe ser un email valido')
        .bail().custom(async (email, req) => {
            try {
                const user = await usuarios.findAll()
                const usuarioEncontrado = user.filter(mail => mail == email)
                if (user) {
                    return Promise.reject('Este mail ya esta registrado')
                }
            } catch (informacion) {
                res.send(informacion)
            }
        })
       //--- .normalizeEmail() INVESTIGAR MAS DE QUE TRATA Y QUE HACE ---//
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
