module.exports = (sequelize, Sequelize) => {
	const Factura = sequelize.define('factura', {	
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	},
        noFact: {
            type: Sequelize.INTEGER
    },
        serie: {
            type: Sequelize.STRING
    },
        fechaFact: {
            type: Sequelize.DATE
    },

	});
	
	return Factura;
}