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
