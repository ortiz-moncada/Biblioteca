const express = require('express');
const router = express.Router();
const {
    getlistarEntyreHolders,
    getListarEntyreDia,
    getListarEentyreFecha,
    postInsertEntyre,
    putRejistrarSandE,
} = require('../controllers/Entrys');

// List entries by holder ID
router.get('/entrys/holder/:id', getlistarEntyreHolders);

// List entries by a specific day
router.get('/entrys/day', getListarEntyreDia);

// List entries between two dates
router.get('/entrys/dates', getListarEentyreFecha);

// Insert a new entry
router.post('/entrys', postInsertEntyre);

// Update entry status and delivery date
router.put('/entrys/status', putRejistrarSandE);

module.exports = router;

