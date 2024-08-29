
module.exports = (sequelize, Sequelize) => {
	const Empleado = sequelize.define('empleado', {	
		id: {
			type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
	},
	  nombre1: {
			type: Sequelize.STRING
	},
		nombre2: {
			type: Sequelize.STRING
	},
	  apellido1: {
			type: Sequelize.STRING
  	},
	  apellido2: {
			type: Sequelize.STRING
	},
	  nit: {
			type: Sequelize.STRING
    },
		salario: {
			type: Sequelize.INTEGER
	},
		estatus: {
			type: Sequelize.INTEGER
	},
	
	});
	
	return Empleado;
}