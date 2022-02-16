var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");


router.get('/ingresar', userController.login);
router.get('/registrarse', userController.register);
router.get('/preregistro', userController.preregister);


module.exports = router;
