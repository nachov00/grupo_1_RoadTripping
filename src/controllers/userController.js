const productController = {
    login: (req, res) => {
      res.render("users/login")
    },
    preregister: (req, res) => {
      res.render("users/preregister")
    },
    register: (req, res) => {
        res.render("users/register")
      },
  };
  
  module.exports = productController;