const express = require('express');
const app = express();
const router = require('./routes/createRouter')()

app
.use('/api', router)
.use((error, req,res, next) => {
    res.status(error.status || 500).json({error})
})

//const itemRoutes = require('./api/routes/items');
//app.use('/items', itemRoutes);

//const wepRoutes = require('./api/routes/weapons');
//app.use('/weapons', wepRoutes);

module.exports = app;