const { validationResult } = require("express-validator");
const service = require('../services/userServices')

const userController = {
    
    login: (req, res) => {
        
        const user = req.cookies.user;
        
        if (user) {
            let userFound = service.detail(user.id)
            res.redirect('/', {usuario:userFound} );
        } else {
            res.cookie('user', true, {maxAge: 60000 * 24}) // req.cookies.user

            res.render("user/login")
        }
        
    },

    register: (req, res) => {

        if (user) {
            let userFound = service.detail(user)
            res.redirect('/', {usuario:userFound} );
        } else {
            res.cookie('user', true, {maxAge: 60000 * 24}) // req.cookies.user

            res.render("user/register")
        }


    },

    preregister: (req, res) => {

        if (user) {
            let userFound = service.detail(user)
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
        
        service.create()

    },

    logMeIn:(req, res) => {
        const errors = validationResult(req);
        
        if(errors.errors.length > 0){
            res.render("login", {errorsLogin: errors.mapped()})
        }

        const userFound = service.list().find(function(user){
        //const userFound = users.find(function(user){
            return user.usuario == req.body.usuario && bcrypt.compareSync(req.body.password, user.password)
        })

        if(userFound){
            //proceso session
            let user = {
                 id: userFound.id,
                 nombre: userFound.name,
                 usuario: userFound.usuario,
                 avatar: userFound.avatar,
            }

            req.session.usuarioLogueado = user

            if(req.body.remember){
                res.cookie('user', user.id, {maxAge: 60000 * 24}) // req.cookies.user
            }

            res.redirect("/")

        }else{
            res.render("login", {errorMsg: "Error credenciales invalidas"})
        }

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
