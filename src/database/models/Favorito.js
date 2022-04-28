module.exports = (sequelize, dataTypes) => {
    let alias = "favorito";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            foreingKey: true,
        },
        producto_id: {
            type: dataTypes.INTEGER,
            autoIncrement: false,
            foreingKey: true,
        },
    };

    let config = {
        tableName: "favoritos",
        timestamps: false
    };

    const Favorito = sequelize.define('alias', 'cols', 'config');

    return Favorito;
}