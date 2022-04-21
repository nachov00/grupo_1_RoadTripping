const service = require('../services/userServices')


function rememberCookie (req, res , next){

    if(!req.session.usuarioLogueado && req.cookies.user){

        let usuarios = service.findAll()

        const usuarioCookies = usuarios.find(function(user){
            return user.id == req.cookies.user
        })

        let user = {
            //COMPLETAR
            //COMPLETAR
            //COMPLETAR
            //COMPLETAR
        }

        req.session.usuarioLogueado = user;

        return next()

    } else {
        return next()
    }
}

module.exports = rememberCookie;