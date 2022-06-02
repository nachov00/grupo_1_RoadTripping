const services = require('../services/productServices')

const productController = {
  listado: (req, res) => {

    let productos = services.list();
    res.render("products/productList", { productos })
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