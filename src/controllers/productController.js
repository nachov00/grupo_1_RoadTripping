const productController = {
    detail: (req, res) => {
      res.render("products/productDetail2")
    },
    shopping: (req, res) => {
      res.render("products/shopping")
    },
  };
  
  module.exports = productController;