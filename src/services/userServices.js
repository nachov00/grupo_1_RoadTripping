const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const res = require('express/lib/response');
const cookie_parser = require('cookie-parser')

const usuarios = db.usuarios

const userServices = {

    'list': () => { 
        return db.usuarios.findAll()
    },

    'detail': (id) => {
        return db.usuarios.findByPk(id)
    },

    //'new': () => {},

    //'recommended': () => {},

    //'add': => {},

    'create': (user) => {
        return db.usuarios.create(user)

    },

    /*
    'edit': (req, res) => {
        let productoID = req.params.id;
        let producto = db.productos.findByPk(productoID)
        Promise.all([producto])
        .then( producto => {

        } )
    }, 
    */

    'update': (req, res) => {
        let usuarioID = req.params.id;

        db.usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            genero: req.body.genero,
            usuario: req.body.usuario,
            contraseña: req.body.contraseña,
            admin: req.body.admin,
            avatar: req.body.avatar,
            ubicacion: req.body.ubicacion,
            lengua: req.body.lengua,
            moneda: req.body.moneda
        },
            {
                where: {id: usuarioID}
            })
        .then( () => {
            return res.redirect('/')
        })
        .catch(error => res.send(error))
    },

    //'delete': () => {}

    'destroy': (req, res) => {
        let usuarioID = req.params.id

        db.usuarios.destroy( {where: {id: usuarioID}, force: true} )
        .then( () => res.redirect('/') )
        .catch(error => res.send(error))
    },
}

module.exports = userServices;
