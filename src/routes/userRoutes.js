var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

const multer=require('multer');


router.get('/login', userController.login);
router.get('/registrarse', userController.register);
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
