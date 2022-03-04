var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/Listado', productController.listado);
router.get('/Detail', productController.detail);
router.get('/Shopping', productController.shopping);


module.exports = router;

