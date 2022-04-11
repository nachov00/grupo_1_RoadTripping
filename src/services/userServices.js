const req = require("express/lib/request");
const fs = require("fs");
const path = require("path")

const service = {
    file: path.join(__dirname, "../data/usuarios.json"),

    readFile: function () {
        return fs.readFileSync(this.file, "utf-8")
    },

    writeFile: function (array) {
        let aString = JSON.stringify(array, null, 4)
        fs.writeFileSync(this.file, aString);
    },

    findAll: function () {
        return JSON.parse(this.readFile())
    },

    findID: function (id) {

        const user = this.findAll()
        let usuario = user.find(function (user) {
            return user.id == id
        })
        return usuario;
    },

    findEmail: function (email) {

        const user = this.findAll()
        let usuario = user.find(function (user) {
            return user.email == email
        })
        return usuario;
    },

    newUser: function (body) {

        //UPDATE USUARIO//
        return newUser

    },

    create: function (newUser) {
        let usuarios = this.findAll()
        let usuario = { ...newUser, id: usuarios.length + 1 }
        usuarios.push(usuario)
        console.log(newUser)
        this.writeFile(usuarios)
    },

    update: function (body, id) {
        const usuarios = this.findAll()

        //UPDATE USUARIO//

        let usuario = usuarios.find(function (user) {
            return user.id == id;
        })


        this.writeFile(usuarios);
    },

    destroy: function (id) {
        let usuarios = this.findAll();

        let usuarioIndex = usuarios.findIndex((user) => {
            return user.id == id
        })

        usuarios.splice(usuarioIndex, 1);

        this.writeFile(usuarios);
    }
}

module.exports = service