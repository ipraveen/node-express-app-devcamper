const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ success: true, msg: 'List Bootcamps' });
});

router.get('/:id', (req, res) => {
    res.json({ success: true, msg: `Bootcamp: ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.json({ success: true, msg: 'Create a Bootcamp' });
});

router.put('/:id', (req, res) => {
    res.json({ success: true, msg: `Update Bootcamp: ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ success: true, msg: `Delete Bootcamp: ${req.params.id}` });
});


module.exports = router;