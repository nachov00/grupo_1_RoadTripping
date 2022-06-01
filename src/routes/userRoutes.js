const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const userController = require("../controllers/userController");
const db = require("../database/models");

router.get("/login", userController.login);
router.post("/login", userController.logMeIn);

router.get("/registrarse", userController.register);

router.post(
  "/registrarse",
  [
    check("Nombre")
      .notEmpty()
      .withMessage("No debe estar vacio.")
      .bail()
      .isLength({ min: 2 })
      .withMessage("Debe contener al menos 2 caracteres.")
      .bail()
      .isLength({ max: 21 })
      .withMessage("Debe contener menos de 21 caracteres."),
    /*
    check("usuario")
      .notEmpty()
      .withMessage("No debe estar vacio.")
      .bail()
      .isLength({ min: 2 })
      .withMessage("Debe contener al menos 2 caracteres.")
      .bail()
      .isLength({ max: 21 })
      .withMessage("Debe contener menos de 21 caracteres."),
    */
    check("cumpleaños")
      .notEmpty()
      .withMessage("No debe estar vacio.")
      .bail()
      .custom((anio) => {
        const today = new Date();
        const year = today.getFullYear();

        if (year - anio <= 17) {
          throw new Error("Debes ser mayor de edad para registrarte.");
        } else {
          return true;
        }
      }),

    check("password")
      .notEmpty()
      .withMessage("No debe estar vacio.")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Debe contener al menos 8 caracteres.")
      .bail()
      .custom((password) => {
        const minusculas = /[a-z]/g;
        const mayusculas = /[A-Z]/g;
        const numeros = /[0-9]/g;

        if (
          !password.match(minusculas) ||
          !password.match(mayusculas) ||
          !password.match(numeros)
        ) {
          throw new Error(
            "Su contraseña debe contar con ocho caracteres, y al menos una minúscula, una mayuscula y un número"
          );
        } else {
          return true;
        }
      }),

    check("confirm-pass")
      .notEmpty()
      .withMessage("No debe estar vacio.")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Debe contener al menos 8 caracteres.")
      .bail()
      .custom((password) => {
        const minusculas = /[a-z]/g;
        const mayusculas = /[A-Z]/g;
        const numeros = /[0-9]/g;

        if (
          !password.match(minusculas) ||
          !password.match(mayusculas) ||
          !password.match(numeros)
        ) {
          throw new Error(
            "Su contraseña debe contar con ocho caracteres, y al menos una minúscula, una mayuscula y un número"
          );
        } else {
          return true;
        }
      }),

    check("email")
      .notEmpty()
      .withMessage("No debe estar vacio.")
      .bail()
      .custom((value) => {

        return db.usuarios
          .findOne({ where: { usuario: value } })

          .then((data) => {
            if (data) {
              return Promise.reject("Este mail ya esta registrado");
            }
          });
      }),
    ],
  userController.newRegister
);

router.get("/preregistro", userController.preregister);

router.get("/Term&Cond", userController.TermCond);
router.get("/Privacidad", userController.Privacy);

router.get("/misdatos", userController.userData);
router.get("/mismillas", userController.userMillas);
router.get("/miscompras", userController.userCompras);
router.get("/favoritos", userController.userFav);
router.get("/seguridad", userController.userSeg);
router.get("/notificaciones", userController.userNotif);

module.exports = router;
