const express = require('express');
const router = express.Router();
const {
    getlistarholders,
    getlistarholdersid,
    postholdersinsert,
    putholdersmodificar,
    putholdersactivar,
    putholdersdesactivar
} = require('../controllers/holders');

// List all holders
router.get('/holders', getlistarholders);

// Get holder by ID
router.get('/holders/:id', getlistarholdersid);

// Insert new holder
router.post('/holders', postholdersinsert);

// Update holder by ID
router.put('/holders/:id', putholdersmodificar);

// Activate holder by ID
router.put('/holders/activate/:id', putholdersactivar);

// Deactivate holder by ID
router.put('/holders/deactivate/:id', putholdersdesactivar);

module.exports = router;
