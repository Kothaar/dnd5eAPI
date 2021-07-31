//const http = require('http');
//const app = require('./app')
//const PORT = process.env.PORT || 8080;


//const server = http.createServer(app);
//server.listen(PORT, () => {console.log(`http://localhost:${PORT}`)});



const PORT = process.env.PORT || 8080
const app = require('./app.js')
const server = require('http').createServer()
server
    .on('request', app)
    .on('error', function(error) {
        if (error.syscall !== 'listen') throw error
        const addr = this.address() || { port }
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
    })
    .listen(PORT, () => {console.log(`http://localhost:${PORT}`)});