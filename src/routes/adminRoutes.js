const express = require('express');
const { check } = require('express-validator');
const adminController = require('../controllers/adminController');
const upload = require('../middlewares/productMulter')
const router = express.Router();


router.get('/crear-editar', adminController.crearEditar);

router.get('/crear', adminController.crear);

router.post('/', [
            check('name').notEmpty(),
            check('name').isLength({min:5, max:10}),
            check('name').isEmail(),
            check('name').isInt()
                                ], adminController.guardar);

router.get('/editar-1', [
            check('name').notEmpty(),
            check('name').isLength({min:5, max:10}),
            check('name').isEmail(),
            check('name').isInt()
                        ], adminController.editar);

router.get('/editar-2',  [
            check('name').notEmpty(),
            check('name').isLength({min:5, max:10}),
            check('name').isEmail(),
            check('name').isInt()
                        ], minController.editar);



module.exports = router;

