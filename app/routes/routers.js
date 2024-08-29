
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

module.exports = router;