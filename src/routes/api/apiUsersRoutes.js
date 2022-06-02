const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController');

//Rutas
//Listado de todos los usuarios
router.get('/', userAPIController.list);
//Detalle del usuario
router.get('/:id', userAPIController.detail);


//Agregar un usuario
router.post('/create', userAPIController.create);
//Modificar un usuario
router.put('/update/:id', userAPIController.update);
//Eliminar un usuario
router.delete('/delete/:id', userAPIController.destroy);

module.exports = router;