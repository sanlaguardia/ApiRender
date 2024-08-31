
const express = require('express');
const router = express.Router();
 
const departamentos = require('../controllers/controller.js');

router.post('/api/departamentos/create', departamentos.createDepartamento);
router.get('/api/departamentos/all', departamentos.retrieveAllDepartamentos);
router.get('/api/departamentos/onebyid/:id', departamentos.getDepartamentoById);
router.put('/api/departamentos/update/:id', departamentos.updateDepartamentoById);
router.delete('/api/departamentos/delete/:id', departamentos.deleteDepartamentoById);

router.post('/api/empleados/create', departamentos.createEmpleado);
router.get('/api/empleados/all', departamentos.retrieveAllEmpleados);
router.get('/api/empleados/onebyid/:id', departamentos.getEmpleadoById);
router.put('/api/empleados/update/:id', departamentos.updateEmpleadoById);
router.delete('/api/empleados/delete/:id', departamentos.deleteEmpleadoById);

router.post('/api/clientes/create', departamentos.createCliente);
router.get('/api/clientes/all', departamentos.retrieveAllClientes);
router.get('/api/clientes/onebyid/:id', departamentos.getClienteById);
router.put('/api/clientes/update/:id', departamentos.updateClienteById);
router.delete('/api/clientes/delete/:id', departamentos.deleteClienteById);

router.post('/api/proveedores/create', departamentos.createProveedor);
router.get('/api/proveedores/all', departamentos.retrieveAllProveedores);
router.get('/api/proveedores/onebyid/:id', departamentos.getProveedorById);
router.put('/api/proveedores/update/:id', departamentos.updateProveedorById);
router.delete('/api/proveedores/delete/:id', departamentos.deleteProveedorById);

router.post('/api/productos/create', departamentos.createProducto);
router.get('/api/productos/all', departamentos.retrieveAllProductos);
router.get('/api/productos/onebyid/:id', departamentos.getProductoById);
router.put('/api/productos/update/:id', departamentos.updateProductoById);
router.delete('/api/productos/delete/:id', departamentos.deleteProductoById);

router.post('/api/facturas/create', departamentos.createFactura);
router.get('/api/facturas/all', departamentos.retrieveAllFacturas);
router.get('/api/facturas/onebyid/:id', departamentos.getFacturaById);
router.put('/api/facturas/update/:id', departamentos.updateFacturaById);
router.delete('/api/facturas/delete/:id', departamentos.deleteFacturaById);

router.post('/api/facturadetalles/create', departamentos.createFacturaDetalle);
router.get('/api/facturadetalles/all', departamentos.retrieveAllFacturaDetalles);
router.get('/api/facturadetalles/onebyid/:id', departamentos.getFacturaDetalleById);
router.put('/api/facturadetalles/update/:id', departamentos.updateFacturaDetalleById);
router.delete('/api/facturadetalles/delete/:id', departamentos.deleteFacturaDetalleById);

module.exports = router;