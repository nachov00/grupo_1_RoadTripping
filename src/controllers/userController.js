const { validationResult } = require("express-validator");
const service = require('../services/userServices')
const user = req.cookies.user;

const userController = {

    login: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.redirect('/');
        } else {
            res.render("user/login")
        }
        
    },

    register: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.redirect('/');
        } else {
            res.render("user/register")
        }


    },

    preregister: (req, res) => {

        if (user) {
            let userFound = service.findID(user)
            res.redirect('/');
        } else {
            res.render("user/preregister")
        }

    },

    newRegister:(req, res) => {
        const errors = validationResult(req)
        if(errors.errors.length > 0){
           return res.render("register", {errors: errors.mapped()})
        }
        
        const newUser = {
             user_id: users.length + 1,
             nombre: req.body.name,
             email: req.body.email,
             contraseña: bcrypt.hashSync(req.body.password, 10),
             apellido: req.body.last_name,
             avatar: req.file ? req.file.filename : "image-default"
        }

        users.push(newUser);

        service.writeFile(users)

        res.redirect("/User/login");

    },

    logMeIn:(req, res) => {
        const errors = validationResult(req);
        
        if(errors.errors.length > 0){
            res.render("login", {errorsLogin: errors.mapped()})
        }

        const userFound = users.find(function(user){
            return user.email == req.body.email && bcrypt.compareSync(req.body.password, user.password)
        })

        if(userFound){
            //proceso session
            let user = {
                 user_id: userFound.id,
                 nombre: userFound.name,
                 apellido: userFound.last_name,
                 avatar: userFound.avatar,
            }

            req.session.usuarioLogueado = user

            if(req.body.remember){
                res.cookie("user", user.id, {maxAge: 60000 * 24})
            }

            res.redirect("/")

        }else{
            res.render("login", {errorMsg: "Error credenciales invalidas"})
        }

    },
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
