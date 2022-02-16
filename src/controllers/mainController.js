const mainController = {
    home: (req, res) => {
      res.render("main/home")
    },
    us: (req, res) => {
      res.render("main/us")
    },
  };
  
  module.exports = mainController;