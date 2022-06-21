const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const users = db.usuarios;
const products = db.Producto;

//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const usersAPIController = {
    'list': (req, res) => {
        users.findAll()
        .then(data => {
            let new_users = data.map(user => {
                return {
                    id: user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    usuario: user.usuario,
                    gereno: user.genero,
                    ubicacion: user.ubicacion
                }
            })
            
            let respuesta = {
                data: new_users,
                meta: {
                    status : 200,
                    count: users.length,
                    url: 'api/users'
                }
                
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        users.findByPk(req.params.id)
            .then(user => {

                let new_user = {
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        usuario: user.usuario,
                        gereno: user.genero,
                        ubicacion: user.ubicacion
                    }

                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: new_user
                }
                res.json(respuesta);
            });
    },
    'userProducts': (req, res) => {
        db.Usuario.findByPk(req.params.id,{
            include: ['products']
        })
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
    create: (req,res) => {
        Usuarios
        .create(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                usuario: req.body.usuario,
                genero: req.body.genero
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let userId = req.params.id;
        Usuarios.update(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                usuario: req.body.usuario,
                genero: req.body.genero,
            },
            {
                where: {id: userId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/users/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let userID = req.params.id;
        Usuarios
        .destroy({where: {id: userID}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/users/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = usersAPIController;