module.exports = (sequelize, dataTypes) => {
    let alias = "productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        titulo: {
            type: dataTypes.STRING
        },
        destino: {
            type: dataTypes.STRING
        },
        categoria: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER,
        },
        detalle: {
            type: dataTypes.STRING
        },
    };

    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Producto = sequelize.define('alias', 'cols', 'config');

    return Producto;
}