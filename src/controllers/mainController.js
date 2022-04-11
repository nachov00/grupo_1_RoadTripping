let userID = req.cookies.user;
const service = require('../services/userServices')

const mainController = {
    home: (req, res) => {

      if( userID ) { 
        let userFound = service.findID(ID)
        return ID == userID
      }

      res.render("main/home" , {userFound})
    },
    us: (req, res) => {
      res.render("main/us")
    },
  };
  
  module.exports = mainController;