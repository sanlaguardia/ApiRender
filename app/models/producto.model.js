module.exports = (sequelize, Sequelize) => {
	const Producto = sequelize.define('producto', {	
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	},
        descripcion: {
            type: Sequelize.STRING
    },
        stock: {
            type: Sequelize.INTEGER
    },
        stockMinimo: {
            type: Sequelize.INTEGER
    },
        precioUnitario: {
            type: Sequelize.FLOAT
    },

	});
	
	return Producto;
}