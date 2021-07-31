const db = require('../../../db/index');
const express = require('express');
const router = express.Router();

router.get('/weapons', async (req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/weapons', (req, res, next) => {
    res.status(200).json({ 
        message: 'post req to /products'
    })
});

router.get('/weapons/:id', async (req, res, next) => {
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.get('/weapons/n/:name', async (req, res, next) => {
    try {
        let results = await db.name(req.params.name);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;