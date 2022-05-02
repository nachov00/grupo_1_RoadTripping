const service = require('../services/userServices')


function rememberCookie (req, res , next){

    if(!req.session.usuarioLogueado && req.cookies.user){

        let usuarios = service.findAll()

        const usuarioCookies = usuarios.find(function(user){
            return user.id == req.cookies.user
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