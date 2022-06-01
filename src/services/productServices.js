const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const res = require('express/lib/response');

const productos = db.productos

const productsServices = {

    'list': () => { 
        db.productos.findAll()
        .then( (data) => data.JSON())
        .then( productos => productos)
    },

    'detail': (id) => {
        db.productos.findByPk(id)

        .then(producto => producto)
    },

    //'new': () => {},

    //'recommended': () => {},

    //'add': => {},

    'create': (req, res) => {
        db.productos.create(
            {
                titulo: req.body.titulo,
                destino: req.body.destino,
                categoria: req.body.categoria,
                precio: req.body.precio,
                detalle: req.body.detalle,
            }
        )
        .then( 
            () => {return res.redirect('/')} 
            )
        .catch(error => res.send(error))
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
        let productoID = req.params.id;

        db.producto.update({
            titulo: req.body.titulo,
            destino: req.body.destino,
            categoria: req.body.categoria,
            precio: req.body.precio,
            detalle: req.body.detalle,
            },
            {
                where: {id: productoID}
            })
        .then( () => {
            return res.redirect('/')
        })
        .catch(error => res.send(error))
    },

    //'delete': () => {}

    'destroy': (req, res) => {
        let productoID = req.params.id

        db.productos.destroy( {where: {id: productoID}, force: true} )
        .then( () => res.redirect('/') )
        .catch(error => res.send(error))
    },
}

module.exports = productsServices;

