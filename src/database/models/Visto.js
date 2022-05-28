module.exports = (sequelize, dataTypes) => {
    let alias = "visto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            foreingKey: true,
        },
        producto_id: {
            type: dataTypes.INTEGER,
            foreingKey: true,
        },
    };

    let config = {
        tableName: "vistos",
        timestamps: false
    };

    const Vistos = sequelize.define(alias, cols, config);

    return Vistos;
}