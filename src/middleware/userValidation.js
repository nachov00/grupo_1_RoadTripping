const { check, body } = require("express-validator")

const bcrypt = require('bcryptjs');
const service = require('../services/userServices')

const validator = {
    login: [
        check("email")
            .notEmpty()
            .withMessage("Campo email vacio")
            .bail()

            .custom(function (value) {

                let users = service.findAll()                   //busco al usuario

               
                let userFound = users.find(function (user) {
                    return user.email == value                  //si existe un usuario devuelvo el error
                })
                
                if (userFound) {
                    return true                                 //devuelvo true
                }
               
                throw new Error("Email no está registrado!");   //sino tiro error

            }),

        check("password")
            .notEmpty()
            .withMessage("campo password vacio")
            .bail()

            .custom(function (password) {
                let usuario = service.findEmail(check('email'));
                let check = bcrypt.compareSync(password, usuario.contraseña);
            })
    ],


    register: [
        check("email")
            .notEmpty()
            .withMessage("Email vacio")
            .bail()

            .isEmail()
            .withMessage("formato de email incorrecto")
            .bail()

            .custom(function (value) {
                let users = service.findAll()               //busco al usuario
                
                let userFound = users.find(function (user) {
                    return user.email == value              //si existe un usuario 
                })
               
                if (userFound) {
                    throw new Error("Email ya registrado!");//devuelvo el error
                }
                
                return true                                //sino devuelvo true
            })
        ,
        check("name")
            .notEmpty()
            .withMessage("campo nombre vacio"),

        check("last_name")
            .notEmpty()
            .withMessage("campo last_name vacio"),

        check("password")
            .notEmpty()
            .withMessage("campo password vacio")
            .bail()

            .custom(function (password) {
                let hashPassword = bcrypt.hashSync(password, 12);
                return hashPassword
            })
    ]
}

module.exports = validator