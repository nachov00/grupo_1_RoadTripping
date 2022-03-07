const productController = {
  listado: (req, res) => {
    res.render("products/productList")
  },
    detail: (req, res) => {
      res.render("products/productDetail2")
    },
    shopping: (req, res) => {
      res.render("products/shopping")
    },
  };
  
  module.exports = productController;