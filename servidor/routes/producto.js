const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//api/productos
router.post('/', productoController.crearProducto);
router.get('/',productoController.obtenerProductos);
router.get('/:id',productoController.obtenerProducto);
router.put('/:id',productoController.obtenerProducto);
router.delete('/:id',productoController.deleteProducto);

module.exports = router;