const cookie_parser = require('cookie-parser')
const service = require('../services/userServices')


function rememberCookie (req, res , next){

    if(!req.session.usuarioLogueado && req.cookies.user){

        let usuarios = service.list()

        const usuarioCookies = usuarios.find(function(usuario){
            return usuario.id == req.cookies.user
        })

        let user = {
            id: usuarioCookies.id,
            name: usuarioCookies.name,
            last_name: usuarioCookies.last_name,
            avatar: usuarioCookies.avatar,
        }

        req.session.usuarioLogueado = user;

        return next()

    } else {
        return next()
    }
}

module.exports = rememberCookie;