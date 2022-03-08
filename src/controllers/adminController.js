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

<<<<<<< HEAD
      let newProduct = service.newProduct(req.body); 
      products.push(newProduct)

      writeFile(products)
=======
      //creo el nuevo producto para agregar
      console.log(req.body)

      let newProduct = {
        
          id: products.length + 1,
          titulo: req.body.titulo ,
          destino: req.body.destino,
          categoria: req.body.categoria , 
          precio: {
              valor: req.body.valor,
              divisa: req.body.divisa
          },
          detalle: {
              disponibilidad: {
                    from: req.body.from,
                    to: req.body.to
              },
              hotel: req.body.hotel,
              boletos: req.body.boletos,
              excursiones: { },
              fecha: req.body.fecha,
              translados: req.body.translado,
              crusero: req.body.crusero,
              descripcion: req.body.descripcion,
          },
          images: { }

      }
      
      //agrego el nuevo producto a mi listado de productos 
      products.push(newProduct)

      //modifico mi base de datos
      service.writeFile(products)
>>>>>>> 502ba4744f8f96b7a4045e31483ccfff157202d6

        res.redirect("/admin/crear-editar")
    },

    editar: (req, res) => {
        res.render("../views/admin/edit", {productos: service.findAll()} )
    },
  };
  
  
  module.exports = adminController;