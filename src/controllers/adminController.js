const { json } = require("express/lib/response");
const adminService = require("../services/adminServices");
const service = require("../services/adminServices");

const adminController = {
    crearEditar: (req, res) => {
      res.render("../views/admin/create_edit")
    },

    crear1: (req, res) => {
      res.render("../views/admin/create-1")
    },

    crear2: (req, res) => {
      res.render("../views/admin/create-2")
    },

    crear3: (req, res) => {
      res.render("../views/admin/create-3")
    },

    guardar: (req, res) => {
          
      let products = service.findAll()

      //creo el nuevo producto para agregar
      console.log(req.body)
      let newProduct = {
        
          id: products.length + 1,
          titulo: req.body.titulo ,
          destino: req.body.destino,
          fecha: req.body.fecha ,
          //categoria: req.body.categoria , 
          //contenido: req.body.contenido , 
          //precio: req.body.precio,
          //divisa: req.body.divisa , 
          //descripcion: req.body.descripcion 
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