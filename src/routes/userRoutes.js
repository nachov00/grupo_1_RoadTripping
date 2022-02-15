var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');


router.get('/login', userController.login);
router.get('/registrarse', userController.register);
router.get('/preregistro', userController.preregister);
router.get('/Term&Cond', userController.TermCond);
router.get('/Privacidad', userController.Privacy);


module.exports = router;
