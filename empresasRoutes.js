const express = require('express');
const empresasController = require('../controllers/empresasController');

const router = express.Router();

router.get('/empresas', empresasController.getAllEmpresas);
router.post('/empresas', empresasController.createEmpresa);
router.put('/empresas/:id', empresasController.updateEmpresa);
router.delete('/empresas/:id', empresasController.deleteEmpresa);

module.exports = router;