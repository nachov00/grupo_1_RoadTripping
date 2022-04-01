const { validationResult } = require("express-validator");
const service = require('../services/userServices')

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

    newRegister:(req, res) => {
        const errors = validationResult(req)
        if(errors.errors.length > 0){
           return res.render("register", {errors: errors.mapped()})
        }
        
        const newUser = {
            // id: users.length + 1,
            // name: req.body.name,
            // email: req.body.email,
            // password: bcrypt.hashSync(req.body.password, 10),
            // last_name: req.body.last_name,
            // avatar: req.file ? req.file.filename : "image-default"
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
                // id: userFound.id,
                // name: userFound.name,
                // last_name: userFound.last_name,
                // avatar: userFound.avatar,
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
        res.render("user/user_data")
    },
    userMillas: (req, res) => {
        res.render("user/user_millas")
    },
    userCompras: (req, res) => {
        res.render("user/user_compras")
    },
    userFav: (req, res) => {
        res.render("user/user_fav")
    },
    userSeg: (req, res) => {
        res.render("user/user_seg")
    },
    userNotif: (req, res) => {
        res.render("user/user_notif")
    },
};

module.exports = userController;
