const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
const service = require("../services/userServices");
const db = require("../database/models");

const usuarios = db.usuarios;

const userController = {
  login: (req, res) => {
    res.render("user/login");
  },

  register: async (req, res) => {
    const usuario = await db.usuarios.findAll();
    console.log(usuario);

    let errors = [];
    res.render("user/register", { errors });
  },

  preregister: (req, res) => {
    res.render("user/preregister");
  },

  newRegister: (req, res) => {
    const errors = validationResult(req);

    if (errors.errors.length > 0) {
      return res.render("user/register", { errors: errors.errors, old: req.body });
    } else {
    }

    let user = {
      nombre: req.body.Nombre,
      apellido: req.body.Apellido,
      usuario: req.body.email, //EMAIL
      contraseña: req.body.password //bcrypt.hashSync(req.body.password, 10),
      //admin: req.body.admin,
      //avatar: req.body.avatar,
    };

    service.create(user).then((user) => {
      let usuarioEncontrado = {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        usuario: user.usuario,
      };
      req.session.usuarioLogueado = usuarioEncontrado;
      res.redirect("/");
    });
  },

  logMeIn: (req, res) => {

    const errors = validationResult(req);

    if (errors.errors.length > 0) {
        console.log('Algo falló')
        res.render("user/login", { errorsLogin: errors.mapped() });
    } else {
        console.log('Entrando')
     }

    db.usuarios.findOne({
        where: { usuario: req.body.email },
      })
      .then((usuarioEncontrado) => {

          console.log(usuarioEncontrado.usuario)
          console.log(req.body.email)
          console.log(usuarioEncontrado.contraseña)
          console.log(req.body.password)
          console.log(bcrypt.hashSync(req.body.password, 10))

        if ( usuarioEncontrado && (req.body.password === usuarioEncontrado.contraseña) ) {
           // bcrypt.compareSync(req.body.password, usuarioEncontrado.contraseña)
            // $2a$10$MwjgGGjEr9LQ8LWUFHLrGOW
          let usuario = {
            id: usuarioEncontrado.id,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            usuario: usuarioEncontrado.usuario,
            //avatar: usuarioEncontrado.avatar,
          };

          req.session.usuarioLogueado = usuario;

          if (req.body.remember) {
            res.cookie("user", usuario.id, { maxAge: 60000 * 24 });
          }

          res.redirect("/");
        } else {
          res.render("user/login", { errorsLogin: "Credenciales invalidas" });
        }
      });
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
    res.render("user/terminos_condiciones");
  },
  Privacy: (req, res) => {
    res.render("user/aviso_privacidad");
  },
  userData: (req, res) => {
    if (user) {
      let userFound = service.findID(user);
      res.render("user/user_data");
    } else {
      res.redirect("/user/login");
    }
  },
  userMillas: (req, res) => {
    if (user) {
      let userFound = service.findID(user);
      res.render("user/user_millas");
    } else {
      res.redirect("/user/login");
    }
  },
  userCompras: (req, res) => {
    if (user) {
      let userFound = service.findID(user);
      res.render("user/user_compras");
    } else {
      res.redirect("/user/login");
    }
  },
  userFav: (req, res) => {
    if (user) {
      let userFound = service.findID(user);
      res.render("user/user_fav");
    } else {
      res.redirect("/user/login");
    }
  },
  userSeg: (req, res) => {
    if (user) {
      let userFound = service.findID(user);
      res.render("user/user_seg");
    } else {
      res.redirect("/user/login");
    }
  },
  userNotif: (req, res) => {
    if (user) {
      let userFound = service.findID(user);
      res.render("user/user_notif");
    } else {
      res.redirect("/user/login");
    }
  },
};

module.exports = userController;
