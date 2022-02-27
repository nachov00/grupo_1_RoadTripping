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
};

module.exports = userController;
