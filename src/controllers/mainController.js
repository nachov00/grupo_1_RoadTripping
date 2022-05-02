const cookies = require('../middleware/recordar')

const req = require("express/lib/request");
const fs = require("fs");
const path = require("path")

let userID = req.cookies.user;

const service = require('../services/userServices')
service.requires();


const mainController = {
    home: (req, res) => {

  service.requires();


    if( userID ) { 
        let userFound = service.findID(ID)
        return ID == userID
      }

      res.render("main/home")// , {userFound})
    },
    us: (req, res) => {
      res.render("main/us")
    },
  };
  
  module.exports = mainController;