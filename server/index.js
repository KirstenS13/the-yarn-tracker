// imports
const express = require('express');
const yarntypeRouter = require('./routers/yarntype_router');
const path = require('path')

// create server
const server = express();
const port = process.env.PORT || 3000;

// tell express where to serve static pages from
server.use(express.static(path.join(__dirname, 'build')));

// use middleware here
// middleware to handle incoming json data
server.use(express.json());
// middleware to allow two ports with CORS - set header for everything

// use routes and routers here

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

server.use(yarntypeRouter);
server.get('/api', (req, res) => {
    res.send('Hello, this is the server')
});

// use error middleware here
server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong, please try again later"
    })
});

// start the server here
server.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});

