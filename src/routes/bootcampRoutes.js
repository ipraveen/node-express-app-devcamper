const express = require('express');
const router = express.Router();
const Bootcamp = require('../models/Bootcamp');

router.get('/', async (req, res) => {
    try {
        console.log('>>>>:', req.body);
        const bootcamps = await Bootcamp.find();
        res.json({ success: true, data: bootcamps });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if (!bootcamp) {
            return res.status(400).json({ status: 'FAILED' });
        }

        res.json({ success: true, data: bootcamp });
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('>>>>:', req.body);
        const bootcamp = await Bootcamp.create(req.body);
        res.json({ success: true, data: bootcamp });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!bootcamp) {
            return res.status(400).json({ status: 'FAILED' });
        }
        res.json({ success: true, data: bootcamp });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
        });
    }
});

router.delete('/:id', (req, res) => {
    res.json({ success: true, msg: `Delete Bootcamp: ${req.params.id}` });
});

module.exports = router;
