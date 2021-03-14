const express = require('express');
const router = express.Router();
const Bootcamp = require('../models/Bootcamp');
const RestError = require('../utils/RestError');
const appError = require('../config/appError');
const MongoDBError = require('../utils/MongoDBError');

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
            next(new MongoDBError({ name: 'ResourceNotFound' }));
        }

        res.json({ success: true, data: bootcamp });
    } catch (error) {
        next(new MongoDBError(error));
    }
});

router.post('/', async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.json({ success: true, data: bootcamp });
    } catch (error) {
        next(new MongoDBError(error));
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
