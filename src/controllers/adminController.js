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
          
      let products = service.findAll()

      //creo el nuevo producto para agregar
      let newProduct = {
          id: products.length + 1,
          name: req.body.name ,
          price: req.body.price,
          description: req.body.description 
      }
      
      //agrego el nuevo producto a mi listado de productos 
      products.push(newProduct)

      //modifico mi base de datos
      writeFile(products)

        res.redirect("/admin/crear-editar")
    },

    editar: (req, res) => {
        console.table(service.readFile());
        res.render("../views/admin/edit", {productos: service.findAll()} )
    },
  };
  
  
  module.exports = adminController;