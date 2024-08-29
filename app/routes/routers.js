
const express = require('express');
const router = express.Router();
 
const departamentos = require('../controllers/controller.js');

router.post('/api/departamentoss/create', departamentos.createDepartamento);
router.get('/api/departamentos/all', departamentos.retrieveAllDepartamentos);
router.get('/api/departamentos/onebyid/:id', departamentos.getDepartamentoById);
router.put('/api/departamentos/update/:id', departamentos.updateDepartamentoById);
router.delete('/api/departamentos/delete/:id', departamentos.deleteDepartamentoById);

const empleados = require('../controllers/controller.js');

router.post('/api/empleados/create', empleados.createEmpleado);
router.get('/api/empleados/all', empleados.retrieveAllEmpleados);
router.get('/api/empleados/onebyorderid/:id', empleados.getEmpleadoById);
router.put('/api/empleados/update/:id', empleados.updateEmpleadoById);
router.delete('/api/empleados/delete/:id', empleados.deleteEmpleadoById);

module.exports = router;