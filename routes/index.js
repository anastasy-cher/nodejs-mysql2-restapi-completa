const express = require('express');
const router = express.Router();

const pool = require('../db')
const employees = require('./employees')


router.get('/', function(req, res, next) {
  res.send('Hola mundo!')
});

router.get('/ping', async function(req, res, next) {
  let result = await pool.query("SELECT 1+1 AS result")
  res.json(result)
});

router.use(employees)
module.exports = router;