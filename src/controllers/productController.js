const services = require('../services/productServices')
const db = require("../database/models");

const productController = {
  listado: (req, res) => {
    
    db.productos.findAll()
    .then(data => {
      res.render("products/productList", { productos: data })
    })

  },
    detail: (req, res) => {
      let producto = services.detail(req.params.id)
      res.render("products/productDetail2", {producto})
    },
    shopping: (req, res) => {
      res.render("products/shopping")
    },
  };
  
  module.exports = productController;