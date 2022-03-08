const { json } = require("express/lib/response");
const adminService = require("../services/adminServices");
const service = require("../services/adminServices");

const adminController = {
    crearEditar: (req, res) => {
      res.render("../views/admin/create_edit")
    },

    crear: (req, res) => {
      res.render("../views/admin/create")
    },

    guardar: (req, res) => {
          
      console.log(req.body)
      let products = service.findAll()

      let newProduct = service.newProduct(req.body); 
      products.push(newProduct)

      writeFile(products)

        res.redirect("/admin/crear-editar")
    },

    editar: (req, res) => {
        res.render("../views/admin/edit", {productos: service.findAll()} )
    },
  };
  
  
  module.exports = adminController;