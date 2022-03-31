const express = require('express');
const { check } = require('express-validator');
const adminController = require('../controllers/adminController');
const router = express.Router();


router.get('/crear-editar', adminController.crearEditar);

router.get('/crear', adminController.crear);

router.post('/', [
            check('titulo').notEmpty().withMessage('No debe estar vacio.')
                .bail().isLength({min:5, max:30}).withMessage('Debe contener más caracteres.'),
            check('destino').notEmpty().withMessage('Elija un destino.'),
            check('from').notEmpty().isNumeric(),
            check('to').notEmpty().isNumeric(),
            check('categoria').notEmpty().withMessage('No debe estar vacio.'),
            check("contenido").isLength({min:5, max:30}),
            check("valor").notEmpty().withMessage('No debe estar vacio.'),
            check('divisas'),
            check('descripcion'),
                                ], adminController.guardar);

router.get('/editar-1', [
                        ], adminController.editar);

router.get('/editar-2',  [
                        ], minController.editar);

router.post('/editar/:id', [
            check('titulo').notEmpty().withMessage('No debe estar vacio.')
                .bail().isLength({min:5, max:30}).withMessage('Debe contener más caracteres.'),
            check('destino').notEmpty().withMessage('Elija un destino.'),
            check('from').notEmpty().isNumeric(),
            check('to').notEmpty().isNumeric(),
            check('categoria').notEmpty().withMessage('No debe estar vacio.'),
            check("contenido").isLength({min:5, max:30}),
            check("valor").notEmpty().withMessage('No debe estar vacio.'),
            check('divisas'),
            check('descripcion'),
                        ], adminController.editar);

module.exports = router;

