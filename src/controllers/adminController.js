const adminService = require("../services/adminServices");

const adminController = {
    crearEditar: (req, res) => {
      res.render("../views/admin/create_edit")
    },

    crear: (req, res) => {
      res.render("../views/admin/create")
    },

    guardar: (req, res) => {
        adminService.create(req.body)
        res.redirect("admin/create")
      },

    editar: (req, res) => {
        res.render("../views/admin/edit", {productos:"../data/products.json"}, {id:req.params.id})
      },
  };
  
  module.exports = adminController;