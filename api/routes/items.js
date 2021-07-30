const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ 
        message: 'GET req to /products'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({ 
        message: 'post req to /products'
    })
});

router.get('/:itemID', (req, res, next) => {
    const id = req.params.itemID;
    res.status(200).json({ 
        message : 'Requested Item',
        id : id
    })
});


module.exports = router;