const cookiees = require('../middleware/recordar')
const cookie = require('cookie-parser')
const req = require("express/lib/request");
const fs = require("fs");
const path = require("path")
const service = require('../services/userServices')
const db = require('../database/models')



const mainController = {
  home: (req, res) => {
  
    res.render("main/home")
    },
    us: (req, res) => {
      res.render("main/us")
    },
  };
  
  module.exports = mainController;