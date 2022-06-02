const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController');

//Rutas
//Listado de todos los usuarios
router.get('/', productAPIController.list);
//Detalle del usuario
router.get('/:id', productAPIController.detail);


//Agregar un usuario
router.post('/create', productAPIController.create);
//Modificar un usuario
router.put('/update/:id', productAPIController.update);
//Eliminar un usuario
router.delete('/delete/:id', productAPIController.destroy);

module.exports = router;