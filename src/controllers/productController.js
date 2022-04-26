const services = require('../services/productServices')

const productController = {

    listado: (req, res) => {
      res.render("products/productList", { productos: services.list() })
    },

    detail: (req, res) => {
      let producto = services.findID(req.params.id)
      res.render("products/productDetail2", {producto})
    },

    shopping: (req, res) => {
      res.render("products/shopping")
    },
  };
  
  module.exports = productController;