const cookiees = require('../middleware/recordar')
const cookie = require('cookie-parser')


const req = require("express/lib/request");
const fs = require("fs");
const path = require("path")


const service = require('../services/userServices')




const mainController = {
  home: (req, res) => {
    
    /*if( req.cookies ) { 
      const userID = req.cookies;
        let userFound = service.detail(ID)
        return ID == userID
      }*/

      res.render("main/home")// , {userFound})
    },
    us: (req, res) => {
      res.render("main/us")
    },
  };
  
  module.exports = mainController;