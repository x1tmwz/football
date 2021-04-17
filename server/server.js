const path = require("path");
const http = require('http');
const express = require('express');
const app = require('./app');
const socket =require('./socket');


const server = http.createServer(app);


const port = process.env.PORT || 3001;
const buildPath = path.join(__dirname, "..", 'build');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath
        , 'index.html'))
});



socket.configure(server)


server.listen(port, () => {
    console.log('the server is on port 3001');
})
