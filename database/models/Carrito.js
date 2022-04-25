module.exports = (sequelize, dataTypes) => {
    let alias = "carrito";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        producto: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },

    };

    let config = {
        tableName: "carritoDeCompras",
        timestamps: false
    };

    const Carrito = sequelize.define('alias', 'cols', 'config');

    return Carrito;
}