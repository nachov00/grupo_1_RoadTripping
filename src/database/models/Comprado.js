module.exports = (sequelize, dataTypes) => {
    let alias = "comprado";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            autoIncrement: false,
            foreingKey: true,
        },
        producto_id: {
            type: dataTypes.INTEGER,
            autoIncrement: false,
            foreingKey: true,
        },
    };

    let config = {
        tableName: "comprados",
        timestamps: false
    };

    const Comprado = sequelize.define(alias, cols, config);

    return Comprado;
}