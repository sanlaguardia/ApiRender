
const express = require('express');
const router = express.Router();
 
const departamentos = require('../controllers/controller.js');

router.post('/api/departamentos/create', departamentos.createDepartamento);
router.get('/api/departamentos/all', departamentos.retrieveAllDepartamentos);
router.get('/api/departamentos/onebyid/:id', departamentos.getDepartamentoById);
router.put('/api/departamentos/update/:id', departamentos.updateDepartamentoById);
router.delete('/api/departamentos/delete/:id', departamentos.deleteDepartamentoById);

router.post('/api/departamentos/create', departamentos.createEmpleado);
router.get('/api/departamentos/all', empleados.retrieveAllEmpleados);
router.get('/api/departamentos/onebyid/:id', empleados.getEmpleadoById);
router.put('/api/departamentos/update/:id', empleados.updateEmpleadoById);
router.delete('/api/departamentos/delete/:id', empleados.deleteEmpleadoById);

module.exports = router;