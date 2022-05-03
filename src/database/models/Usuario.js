module.exports = (sequelize, dataTypes) => {
    let alias = "usuarios";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.INTEGER,
        },
        genero: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.INTEGER
        },
        ubicacion: {
            type: dataTypes.STRING
        },
        lengua: {
            type: dataTypes.STRING
        },
        moneda: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tableName: "usuarios",
        timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}