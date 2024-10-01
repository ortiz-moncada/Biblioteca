const express = require('express');
const router = express.Router();
const {
    getlistarlaptos,
    getlistaridlaptos,
    postInsertarLaptops,
    putModificarLaptops,
    putholdersactivarLaptops,
    putDesactivarLaptops
} = require('../controllers/laptops');

// Ruta para listar todas las laptops
router.get('/laptops',getlistarlaptos);

// Ruta para obtener una laptop por ID
router.get('/laptops/:id',getlistaridlaptos);

// Ruta para insertar una nueva laptop
router.post('/laptops',postInsertarLaptops);

// Ruta para modificar una laptop por ID
router.put('/laptops/:id',putModificarLaptops);

// Ruta para activar una laptop por ID
router.put('/laptops/activar/:id',putholdersactivarLaptops);

// Ruta para desactivar una laptop por ID
router.put('/laptops/desactivar/:id', putDesactivarLaptops);

module.exports = router;
