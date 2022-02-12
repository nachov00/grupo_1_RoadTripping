const productController = {
    detail: (req, res) => {
      res.render("products/productDetail2")
    },
    shopping: (req, res) => {
      res.render("product/shopping")
    },
  };
  
  module.exports = productController;