module.exports = (sequelize, Sequelize) => {
	const FacturaDetalle = sequelize.define('facturadetalle', {	
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	},
        cantidad: {
            type: Sequelize.INTEGER
    },

	});
	
	return FacturaDetalle;
}