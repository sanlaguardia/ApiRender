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

//--------------------------------------- Cliente -----------------------------------------
const Cliente = db.Cliente;

// Crear un nuevo cliente
exports.createCliente = (req, res) => {
    let cliente = {};

    try {
        // Construir objeto Cliente desde el cuerpo de la solicitud
        cliente.nombre = req.body.nombre;
        cliente.apellido = req.body.apellido;
        cliente.razonSocial = req.body.razonSocial;
        cliente.nit = req.body.nit;
        cliente.direccion = req.body.direccion;
        cliente.telefono = req.body.telefono;
        cliente.email = req.body.email;
        cliente.fechaIngreso = req.body.fechaIngreso;
        cliente.estatus = req.body.estatus;

        // Guardar en la base de datos
        Cliente.create(cliente).then(result => {
            res.status(200).json({
                message: "Cliente creado exitosamente con ID = " + result.id,
                cliente: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los clientes
exports.retrieveAllClientes = (req, res) => {
    Cliente.findAll()
        .then(clientes => {
            res.status(200).json({
                message: "¡Clientes obtenidos exitosamente!",
                clientes: clientes
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

// Obtener un cliente por ID
exports.getClienteById = (req, res) => {
    let clienteId = req.params.id;

    Cliente.findByPk(clienteId)
        .then(cliente => {
            if (cliente) {
                res.status(200).json({
                    message: "Cliente obtenido exitosamente con ID = " + clienteId,
                    cliente: cliente
                });
            } else {
                res.status(404).json({
                    message: "Cliente no encontrado con ID = " + clienteId,
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

// Actualizar un cliente por ID
exports.updateClienteById = async (req, res) => {
    try {
        let clienteId = req.params.id;
        let cliente = await Cliente.findByPk(clienteId);

        if (!cliente) {
            res.status(404).json({
                message: "Cliente no encontrado para actualizar con ID = " + clienteId,
                cliente: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                razonSocial: req.body.razonSocial,
                nit: req.body.nit,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                email: req.body.email,
                fechaIngreso: req.body.fechaIngreso,
                estatus: req.body.estatus,
            };

            let result = await Cliente.update(updatedObject, {
                returning: true,
                where: { id: clienteId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el cliente con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Cliente actualizado exitosamente con ID = " + clienteId,
                    cliente: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el cliente con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un cliente por ID
exports.deleteClienteById = async (req, res) => {
    try {
        let clienteId = req.params.id;
        let cliente = await Cliente.findByPk(clienteId);

        if (!cliente) {
            res.status(404).json({
                message: "No existe un cliente con ID = " + clienteId,
                error: "404",
            });
        } else {
            await cliente.destroy();
            res.status(200).json({
                message: "Cliente eliminado exitosamente con ID = " + clienteId,
                cliente: cliente,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el cliente con ID = " + req.params.id,
            error: error.message,
        });
    }
};

//----------------------------------------- Proveedor ---------------------------------------------
const Proveedor = db.Proveedor;

// Crear un nuevo proveedor
exports.createProveedor = (req, res) => {
    let proveedor = {};

    try {
        // Construir objeto Proveedor desde el cuerpo de la solicitud
        proveedor.empresa = req.body.empresa;
        proveedor.direccion = req.body.direccion;
        proveedor.telefono = req.body.telefono;
        proveedor.nit = req.body.nit;
        proveedor.ciudad = req.body.ciudad;
        proveedor.pais = req.body.pais;
        proveedor.contacto = req.body.contacto;
        proveedor.email = req.body.email;
        proveedor.telefonoContatco = req.body.telefonoContatco;
        proveedor.estatus = req.body.estatus;

        // Guardar en la base de datos
        Proveedor.create(proveedor).then(result => {
            res.status(200).json({
                message: "Proveedor creado exitosamente con ID = " + result.id,
                proveedor: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los proveedores
exports.retrieveAllProveedores = (req, res) => {
    Proveedor.findAll()
        .then(proveedores => {
            res.status(200).json({
                message: "¡Proveedores obtenidos exitosamente!",
                proveedores: proveedores
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

// Obtener un proveedor por ID
exports.getProveedorById = (req, res) => {
    let proveedorId = req.params.id;

    Proveedor.findByPk(proveedorId)
        .then(proveedor => {
            if (proveedor) {
                res.status(200).json({
                    message: "Proveedor obtenido exitosamente con ID = " + proveedorId,
                    proveedor: proveedor
                });
            } else {
                res.status(404).json({
                    message: "Proveedor no encontrado con ID = " + proveedorId,
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

// Actualizar un proveedor por ID
exports.updateProveedorById = async (req, res) => {
    try {
        let proveedorId = req.params.id;
        let proveedor = await Proveedor.findByPk(proveedorId);

        if (!proveedor) {
            res.status(404).json({
                message: "Proveedor no encontrado para actualizar con ID = " + proveedorId,
                proveedor: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                empresa: req.body.empresa,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                nit: req.body.nit,
                ciudad: req.body.ciudad,
                pais: req.body.pais,
                contacto: req.body.contacto,
                email: req.body.email,
                telefonoContatco: req.body.telefonoContatco,
                estatus: req.body.estatus,
            };

            let result = await Proveedor.update(updatedObject, {
                returning: true,
                where: { id: proveedorId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el proveedor con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Proveedor actualizado exitosamente con ID = " + proveedorId,
                    proveedor: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el proveedor con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un proveedor por ID
exports.deleteProveedorById = async (req, res) => {
    try {
        let proveedorId = req.params.id;
        let proveedor = await Proveedor.findByPk(proveedorId);

        if (!proveedor) {
            res.status(404).json({
                message: "No existe un proveedor con ID = " + proveedorId,
                error: "404",
            });
        } else {
            await proveedor.destroy();
            res.status(200).json({
                message: "Proveedor eliminado exitosamente con ID = " + proveedorId,
                proveedor: proveedor,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el proveedor con ID = " + req.params.id,
            error: error.message,
        });
    }
};
//--------------------------------------- Producto -------------------------------------------
const Producto = db.Producto;

// Crear un nuevo producto
exports.createProducto = (req, res) => {
    let producto = {};

    try {
        // Construir objeto Producto desde el cuerpo de la solicitud
        producto.descripcion = req.body.descripcion;
        producto.stock = req.body.stock;
        producto.stockMinimo = req.body.stockMinimo;
        producto.precioUnitario = req.body.precioUnitario;

        // Guardar en la base de datos
        Producto.create(producto).then(result => {
            res.status(200).json({
                message: "Producto creado exitosamente con ID = " + result.id,
                producto: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los productos
exports.retrieveAllProductos = (req, res) => {
    Producto.findAll()
        .then(productos => {
            res.status(200).json({
                message: "¡Productos obtenidos exitosamente!",
                productos: productos
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

// Obtener un producto por ID
exports.getProductoById = (req, res) => {
    let productoId = req.params.id;

    Producto.findByPk(productoId)
        .then(producto => {
            if (producto) {
                res.status(200).json({
                    message: "Producto obtenido exitosamente con ID = " + productoId,
                    producto: producto
                });
            } else {
                res.status(404).json({
                    message: "Producto no encontrado con ID = " + productoId,
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

// Actualizar un producto por ID
exports.updateProductoById = async (req, res) => {
    try {
        let productoId = req.params.id;
        let producto = await Producto.findByPk(productoId);

        if (!producto) {
            res.status(404).json({
                message: "Producto no encontrado para actualizar con ID = " + productoId,
                producto: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                descripcion: req.body.descripcion,
                stock: req.body.stock,
                stockMinimo: req.body.stockMinimo,
                precioUnitario: req.body.precioUnitario,
            };

            let result = await Producto.update(updatedObject, {
                returning: true,
                where: { id: productoId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el producto con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Producto actualizado exitosamente con ID = " + productoId,
                    producto: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el producto con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un producto por ID
exports.deleteProductoById = async (req, res) => {
    try {
        let productoId = req.params.id;
        let producto = await Producto.findByPk(productoId);

        if (!producto) {
            res.status(404).json({
                message: "No existe un producto con ID = " + productoId,
                error: "404",
            });
        } else {
            await producto.destroy();
            res.status(200).json({
                message: "Producto eliminado exitosamente con ID = " + productoId,
                producto: producto,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el producto con ID = " + req.params.id,
            error: error.message,
        });
    }
};

//----------------------------------------- Factura ------------------------------------------
const Factura = db.Factura;

// Crear una nueva factura
exports.createFactura = (req, res) => {
    let factura = {};

    try {
        // Construir objeto Factura desde el cuerpo de la solicitud
        factura.noFact = req.body.noFact;
        factura.serie = req.body.serie;
        factura.fechaFact = req.body.fechaFact;

        // Guardar en la base de datos
        Factura.create(factura).then(result => {
            res.status(200).json({
                message: "Factura creada exitosamente con ID = " + result.id,
                factura: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todas las facturas
exports.retrieveAllFacturas = (req, res) => {
    Factura.findAll()
        .then(facturas => {
            res.status(200).json({
                message: "¡Facturas obtenidas exitosamente!",
                facturas: facturas
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

// Obtener una factura por ID
exports.getFacturaById = (req, res) => {
    let facturaId = req.params.id;

    Factura.findByPk(facturaId)
        .then(factura => {
            if (factura) {
                res.status(200).json({
                    message: "Factura obtenida exitosamente con ID = " + facturaId,
                    factura: factura
                });
            } else {
                res.status(404).json({
                    message: "Factura no encontrada con ID = " + facturaId,
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

// Actualizar una factura por ID
exports.updateFacturaById = async (req, res) => {
    try {
        let facturaId = req.params.id;
        let factura = await Factura.findByPk(facturaId);

        if (!factura) {
            res.status(404).json({
                message: "Factura no encontrada para actualizar con ID = " + facturaId,
                factura: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                noFact: req.body.noFact,
                serie: req.body.serie,
                fechaFact: req.body.fechaFact,
            };

            let result = await Factura.update(updatedObject, {
                returning: true,
                where: { id: facturaId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar la factura con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Factura actualizada exitosamente con ID = " + facturaId,
                    factura: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar la factura con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar una factura por ID
exports.deleteFacturaById = async (req, res) => {
    try {
        let facturaId = req.params.id;
        let factura = await Factura.findByPk(facturaId);

        if (!factura) {
            res.status(404).json({
                message: "No existe una factura con ID = " + facturaId,
                error: "404",
            });
        } else {
            await factura.destroy();
            res.status(200).json({
                message: "Factura eliminada exitosamente con ID = " + facturaId,
                factura: factura,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar la factura con ID = " + req.params.id,
            error: error.message,
        });
    }
};

//---------------------------------------- Factura Detalle -----------------------------------------
const FacturaDetalle = db.FacturaDetalle;

// Crear un nuevo detalle de factura
exports.createFacturaDetalle = (req, res) => {
    let facturadetalle = {};

    try {
        // Construir objeto FacturaDetalle desde el cuerpo de la solicitud
        facturadetalle.cantidad = req.body.cantidad;

        // Guardar en la base de datos
        FacturaDetalle.create(facturadetalle).then(result => {
            res.status(200).json({
                message: "Detalle de factura creado exitosamente con ID = " + result.id,
                facturadetalle: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

// Obtener todos los detalles de factura
exports.retrieveAllFacturaDetalles = (req, res) => {
    FacturaDetalle.findAll()
        .then(facturadetalles => {
            res.status(200).json({
                message: "¡Detalles de factura obtenidos exitosamente!",
                facturadetalles: facturadetalles
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

// Obtener un detalle de factura por ID
exports.getFacturaDetalleById = (req, res) => {
    let facturadetalleId = req.params.id;

    FacturaDetalle.findByPk(facturadetalleId)
        .then(facturadetalle => {
            if (facturadetalle) {
                res.status(200).json({
                    message: "Detalle de factura obtenido exitosamente con ID = " + facturadetalleId,
                    facturadetalle: facturadetalle
                });
            } else {
                res.status(404).json({
                    message: "Detalle de factura no encontrado con ID = " + facturadetalleId,
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

// Actualizar un detalle de factura por ID
exports.updateFacturaDetalleById = async (req, res) => {
    try {
        let facturadetalleId = req.params.id;
        let facturadetalle = await FacturaDetalle.findByPk(facturadetalleId);

        if (!facturadetalle) {
            res.status(404).json({
                message: "Detalle de factura no encontrado para actualizar con ID = " + facturadetalleId,
                facturadetalle: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                cantidad: req.body.cantidad,
            };

            let result = await FacturaDetalle.update(updatedObject, {
                returning: true,
                where: { id: facturadetalleId }
            });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el detalle de factura con ID = " + req.params.id,
                    error: "No se puede actualizar",
                });
            } else {
                res.status(200).json({
                    message: "Detalle de factura actualizado exitosamente con ID = " + facturadetalleId,
                    facturadetalle: updatedObject,
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el detalle de factura con ID = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un detalle de factura por ID
exports.deleteFacturaDetalleById = async (req, res) => {
    try {
        let facturadetalleId = req.params.id;
        let facturadetalle = await FacturaDetalle.findByPk(facturadetalleId);

        if (!facturadetalle) {
            res.status(404).json({
                message: "No existe un detalle de factura con ID = " + facturadetalleId,
                error: "404",
            });
        } else {
            await facturadetalle.destroy();
            res.status(200).json({
                message: "Detalle de factura eliminado exitosamente con ID = " + facturadetalleId,
                facturadetalle: facturadetalle,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el detalle de factura con ID = " + req.params.id,
            error: error.message,
        });
    }
};

