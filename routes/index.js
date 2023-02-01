const express = require('express');
const router = express.Router();
const pool = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola mundo!')
});

router.get('/ping', async function(req, res, next) {
  let result = await pool.query("SELECT 1+1 AS result")
  res.json(result)
});

router.get('/employees', function(req, res, next) {
  res.send('Obteniendo empleados')
});

router.post('/employees', function(req, res, next) {
  res.send('Creando')
});

router.put('/employees', function(req, res, next) {
  res.send('Actualizando empleado')
});

router.delete('/employees', function(req, res, next) {
  res.send('Eliminano empleados')
});



module.exports = router;
