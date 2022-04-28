const req = require("express/lib/request");
const fs = require("fs");
const path = require("path")

const service = {
    file: path.join(__dirname, "../data/productos.json"),
    
    readFile: function(){
        return fs.readFileSync(this.file, "utf-8")
    },

    writeFile: function(array){
        let aString = JSON.stringify(array, null, 4)
        fs.writeFileSync(this.file, aString);
    },
    
    findAll: function(){
        return JSON.parse(this.readFile())
    },

    findID: function(id){

        const products = this.findAll()
        let producto = products.find(function(product){
            return product.id == id
        })
        return producto;
    },

    newProduct: function(body) {
        
        let precio = {
            valor: body.valor,
            divisa: body.divisa
        };
  
        let disponibilidad = {
              from: body.desde,
              to: body.hasta
        };
  
        let excurciones = {
            a: '',
            b: '',
        };
  
        let images = {
            a: '',
            b: ''
        };
  
        let detalle = {
            disponibilidad: disponibilidad,
            hotel: body.hotel,
            boletos: body.boletos,
            excurciones: excurciones,
            translados: body.translados,
            cruseros: body.cruseros,
            descripcion: body.descripcion,
            
        };
  
        let newProduct = {
            id: products.length + 1,
            titulo: body.titulo ,
            destino: body.destino,
            categoria: body.categoria , 
            precio: precio,
            detalle: detalle,
            images: images
        }

        return newProduct

    },

    create: function(newProduct){
        let productos = this.findAll()
        let producto = {...newProduct, id: productos.length + 1 }
        productos.push(producto)
        console.log(newProduct)
        this.writeFile(productos)
    },

    update: function(body, id){
        const productos = this.findAll()

        let precio = {
            valor: body.valor,
            divisa: body.divisa
        };
        let disponibilidad = {
              from: body.desde,
              to: body.hasta
        };
        let excurciones = {
            a: '',
            b: '',
        };
        let images = {
            a: '',
            b: ''
        };
  
        let detalle = {
            disponibilidad: disponibilidad,
            hotel: body.hotel,
            boletos: body.boletos,
            excurciones: excurciones,
            translados: body.translados,
            cruseros: body.cruseros,
            descripcion: body.descripcion,
            
        };

        let producto = productos.find(function(product){
            return product.id == id;
        })
        
        producto = {
            id: products.length + 1,
            titulo: body.titulo ,
            destino: body.destino,
            categoria: body.categoria , 
            precio: precio,
            detalle: detalle,
            images: images
        }

        this.writeFile(productos);
    },

    destroy: function(id){
        let productos = this.findAll();

        let productoIndex = productos.findIndex((product)=>{
            return product.id == id
        })

        productos.splice(productoIndex, 1);

        this.writeFile(productos);
    }
}

module.exports = service