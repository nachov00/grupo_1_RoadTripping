const { validationResult } = require("express-validator");
const service = require('../services/userServices')
const db = require('../database/models')

const usuarios = db.usuarios


const userController = {

    login: (req, res) => {

        res.render("user/login")

    },

    register: (req, res) => {

        res.render("user/register")

    },

    preregister: (req, res) => {

        res.render("user/preregister")


    },

    newRegister: (req, res) => {

        const errors = validationResult(req)

        if (errors.errors.length > 0) {
            return res.render("register", { errors: errors.mapped() })
        }
        else { }

        let user = {
            nombre: req.body.name,
            //apellido: user.apellido,
            //genero: user.genero,
            usuario: req.body.usuario,
            contraseña: req.body.contraseña,
            admin: req.body.admin,
            avatar: req.body.avatar,
        }



        service.create(user)
            .then((user) => {
                let usuarioEncontrado = {
                    id: user.id,
                    nombre: user.name,
                    usuario: user.usuario,
                    avatar: user.avatar,
                }
                req.session.usuarioLogueado = usuarioEncontrado;
                res.redirect('/');
            }
            )
    },

    logMeIn: (req, res) => {

        const errors = validationResult(req);

        if (errors.errors.length > 0) {
            res.render("login", { errorsLogin: errors.mapped() })
        }

        usuarios.findOne({
            where: { email: req.body.email }
        })
            .then((usuarioEncontrado) => {

                if (usuarioEncontrado && bcrypt.compareSync(req.body.password, usuarioEncontrado.password)) {

                    let usuarioEncontrado = {
                        id: user.id,
                        nombre: user.name,
                        usuario: user.usuario,
                        avatar: user.avatar,
                    }

                    req.session.usuarioLogueado = usuarioEncontrado;

                    if (req.body.remember) {
                        res.cookie('user', user.id, { maxAge: 60000 * 24 }) 
                    }

                    res.redirect("/")   
                }
                else {
                    res.render("Login", { errorsLogin:"Credenciales invalidas" } ) 
                }

            } )

    },

    //logout:function(req, res){
    //    req.session.destroy();       
    //    res.clearCookie("user");
    //    res.redirect("/");
    //},

    //
    // vvv Cosas que ya no importan tanto vvv
    //
    TermCond: (req, res) => {
        res.render("user/terminos_condiciones")
    },
    Privacy: (req, res) => {
        res.render("user/aviso_privacidad")
    },
    userData: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.render("user/user_data")
        } else {
            res.redirect('/user/login');
        }

    },
    userMillas: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.render("user/user_millas")
        } else {
            res.redirect('/user/login');
        }

    },
    userCompras: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.render("user/user_compras")
        } else {
            res.redirect('/user/login');
        }

    },
    userFav: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.render("user/user_fav")
        } else {
            res.redirect('/user/login');
        }

    },
    userSeg: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.render("user/user_seg")
        } else {
            res.redirect('/user/login');
        }

    },
    userNotif: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.render("user/user_notif")
        } else {
            res.redirect('/user/login');
        }

    },
};

module.exports = userController;
