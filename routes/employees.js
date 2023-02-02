const express= require('express')
const router = express.Router()


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

module.exports = router
  