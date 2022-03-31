const { check, body } = require("express-validator")
/*const fs = require("fs");
const path = require("path");*/
const bcrypt = require('bcryptjs');
const service = require('../services/userServices')

/*function findAll() {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json")));
    return users;
}*/

const validator = {
    login: [
        check("email")
            .notEmpty()
            .withMessage("campo email vacio")
            .bail()
            .custom(function (value) {
                let users = service.findAll()
                //busco al usuario
                let userFound = users.find(function (user) {
                    return user.email == value
                })
                //si existe un usuario devuelvo el error
                if (userFound) {
                    return true
                }
                //sino devuelvo true
                throw new Error("Email no está registrado!");
            }),
        check("password")
            .notEmpty()
            .withMessage("campo password vacio")
            .bail()
            .custom(function (password) {
                let check = bcrypt.compareSync(password /*,user[i].contraseña*/)
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
                let users = service.findAll()
                //busco al usuario
                let userFound = users.find(function (user) {
                    return user.email == value
                })
                //si existe un usuario devuelvo el error
                if (userFound) {
                    throw new Error("Email ya registrado!");
                }
                //sino devuelvo true
                return true
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
                return hashPassword;
            })
    ]
}

module.exports = validator