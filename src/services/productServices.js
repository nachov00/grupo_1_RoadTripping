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

    create: function(newProduct){
        let productos = this.findAll()
        let producto = {...newProduct, id: products.length + 1 }
        productos.push(producto)
        this.writeFile(productos)
    },

    update: function(array, id){
        const productos = this.findAll()

        let producto = productos.find(function(product){
            return product.id == id;
        })
        
        producto.name = array.name;                 //awdawdawdawdawd
        producto.description = array.description;   //awdawdawdawdawd
        producto.price = array.price;               //awdawdawdawddwad

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