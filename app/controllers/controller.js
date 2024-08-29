const db = require('../config/db.config.js');
const Departamento = db.Departamento;

// Crear un nuevo departamento
exports.createDepartamento = (req, res) => {
    let departamento = {};

    try {
        // Construir objeto Departamento desde el cuerpo de la solicitud
        departamento.descripcion = req.body.descripcion;

        // Guardar en la base de datos
        Departamento.create(departamento).then(result => {
            res.status(200).json({
                message: "Departamento creado exitosamente con ID = " + result.id,
                departamento: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los departamentos
exports.retrieveAllDepartamentos = (req, res) => {
    Departamento.findAll()
        .then(departamentos => {
            res.status(200).json({
                message: "¡Departamentos obtenidos exitosamente!",
                departamentos: departamentos
            });
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Obtener un departamento por ID
exports.getDepartamentoById = (req, res) => {
    let departamentoId = req.params.id;

    Departamento.findByPk(departamentoId)
        .then(departamento => {
            if (departamento) {
                res.status(200).json({
                    message: "Departamento obtenido exitosamente con ID = " + departamentoId,
                    departamento: departamento
                });
            } else {
                res.status(404).json({
                    message: "Departamento no encontrado con ID = " + departamentoId,
                    error: "404"
                });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Actualizar un departamento por ID
exports.updateDepartamentoById = async (req, res) => {
    try {
        let departamentoId = req.params.id;
        let departamento = await Departamento.findByPk(departamentoId);

        if (!departamento) {
            res.status(404).json({
                message: "Departamento no encontrado para actualizar con ID = " + departamentoId,
                departamento: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                descripcion: req.body.descripcion
            };

            let result = await Departamento.update(updatedObject, {
                returning: true,
                where: { id: departamentoId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el departamento con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Departamento actualizado exitosamente con ID = " + departamentoId,
                    departamento: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el departamento con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un departamento por ID
exports.deleteDepartamentoById = async (req, res) => {
    try {
        let departamentoId = req.params.id;
        let departamento = await Departamento.findByPk(departamentoId);

        if (!departamento) {
            res.status(404).json({
                message: "No existe un departamento con ID = " + departamentoId,
                error: "404",
            });
        } else {
            await departamento.destroy();
            res.status(200).json({
                message: "Departamento eliminado exitosamente con ID = " + departamentoId,
                departamento: departamento,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el departamento con ID = " + req.params.id,
            error: error.message,
        });
    }
};


//------------------------------ Empleados -------------------------------------
const Empleado = db.Empleado;

// Crear un nuevo empleado
exports.createEmpleado = (req, res) => {
    let empleado = {};

    try {
        // Construir objeto Empleado desde el cuerpo de la solicitud
        empleado.nombre1 = req.body.nombre1;
        empleado.nombre2 = req.body.nombre2;
        empleado.apellido1 = req.body.apellido1;
        empleado.apellido2 = req.body.apellido2;
        empleado.nit = req.body.nit;
        empleado.salario = req.body.salario;
        empleado.estatus = req.body.estatus;

        // Guardar en la base de datos
        Empleado.create(empleado).then(result => {
            res.status(200).json({
                message: "Empleado creado exitosamente con ID = " + result.id,
                empleado: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los empleados
exports.retrieveAllEmpleados = (req, res) => {
    Empleado.findAll()
        .then(empleados => {
            res.status(200).json({
                message: "¡Empleados obtenidos exitosamente!",
                empleados: empleados
            });
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Obtener un empleado por ID
exports.getEmpleadoById = (req, res) => {
    let empleadoId = req.params.id;

    Empleado.findByPk(empleadoId)
        .then(empleado => {
            if (empleado) {
                res.status(200).json({
                    message: "Empleado obtenido exitosamente con ID = " + empleadoId,
                    empleado: empleado
                });
            } else {
                res.status(404).json({
                    message: "Empleado no encontrado con ID = " + empleadoId,
                    error: "404"
                });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

// Actualizar un empleado por ID
exports.updateEmpleadoById = async (req, res) => {
    try {
        let empleadoId = req.params.id;
        let empleado = await Empleado.findByPk(empleadoId);

        if (!empleado) {
            res.status(404).json({
                message: "Empleado no encontrado para actualizar con ID = " + empleadoId,
                empleado: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre1: req.body.nombre1,
                nombre2: req.body.nombre2,
                apellido1: req.body.apellido1,
                apellido2: req.body.apellido2,
                nit: req.body.nit,
                salario: req.body.salario,
                estatus: req.body.estatus
            };

            let result = await Empleado.update(updatedObject, {
                returning: true,
                where: { id: empleadoId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el empleado con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Empleado actualizado exitosamente con ID = " + empleadoId,
                    empleado: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el empleado con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un empleado por ID
exports.deleteEmpleadoById = async (req, res) => {
    try {
        let empleadoId = req.params.id;
        let empleado = await Empleado.findByPk(empleadoId);

        if (!empleado) {
            res.status(404).json({
                message: "No existe un empleado con ID = " + empleadoId,
                error: "404",
            });
        } else {
            await empleado.destroy();
            res.status(200).json({
                message: "Empleado eliminado exitosamente con ID = " + empleadoId,
                empleado: empleado,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el empleado con ID = " + req.params.id,
            error: error.message,
        });
    }
};
