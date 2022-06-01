var express = require('express');
const { check, Result } = require("express-validator");
const upload = require('../middleware/userMulter')
var router = express.Router();
const userController = require("../controllers/userController");


router.get('/login', userController.login);
router.post('/login')

router.get('/registrarse', userController.register);

router.post('/registrarse', 
[
    check('Nombre').notEmpty().withMessage('No debe estar vacio.')
        .bail().isLength({ min: 2  }).withMessage('Debe contener al menos 2 caracteres.')
        .bail().isLength({ max: 21  }).withMessage('Debe contener menos de 21 caracteres.')
        .bail().withMessage('Todo OK'),

    check('usuario').notEmpty().withMessage('No debe estar vacio.')
        .bail().isLength({ min: 2  }).withMessage('Debe contener al menos 2 caracteres.')
        .bail().isLength({ max: 21  }).withMessage('Debe contener menos de 21 caracteres.')
        .bail().withMessage('Todo OK'),

    check('cumpleaños').notEmpty().withMessage('No debe estar vacio.')
        .bail().custom( (anio) => {

            const today = new Date();
            const year = today.getFullYear();

            if (year - anio <= 17) {
                return reject('Debes ser mayor de edad para registrarte.')
            } else { }

        }),

    check('password').notEmpty().withMessage('No debe estar vacio.')
        .bail().isLength({ min: 8 }).withMessage('Debe contener al menos 8 caracteres.')
        .bail().custom( (password) => {

            const minusculas = /[a-z]/g;
            const mayusculas = /[A-Z]/g;
            const numeros = /[0-9]/g;

            if ( !(password.match(minusculas)) || !(password.match(mayusculas)) || !(password.match(numeros)) ) {
                return reject('Su contraseña debe contar con ocho caracteres, y al menos una minúscula, una mayuscula y un número')
            } else { }

        }),

    check('confirm-pass').notEmpty().withMessage('No debe estar vacio.')
        .bail().isLength({ min: 8 }).withMessage('Debe contener al menos 8 caracteres.')
        .bail().custom( (password) => {

            const minusculas = /[a-z]/g;
            const mayusculas = /[A-Z]/g;
            const numeros = /[0-9]/g;

            if ( !(password.match(minusculas)) || !(password.match(mayusculas)) || !(password.match(numeros)) ) {
                return reject('Su contraseña debe contar con ocho caracteres, y al menos una minúscula, una mayuscula y un número')
            } else { }
            
        }),

    check('email').notEmpty().withMessage('No debe estar vacio.')
        .bail().isEmail().withMessage('Debe ser un email valido')
        .bail().custom(async (email) => {
            try {
                const user = await usuarios.findAll()
                const usuarioEncontrado = user.filter(mail => mail == email)
                if (usuarioEncontrado) {
                    return Promise.reject('Este mail ya esta registrado')
                }
            } catch (informacion) {
                res.send(informacion)
            }
        })
    //--- .normalizeEmail() INVESTIGAR MAS DE QUE TRATA Y QUE HACE ---//
],
    userController.newRegister)

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

