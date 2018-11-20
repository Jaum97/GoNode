/* const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    return res.end('Hello World');
}).listen(3000); */

const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send(`Welcome, ${req.query.name}`);
});

app.get('/login', (req, res) => {
    return res.send('Login');
});

app.get('/name/:name', (req, res) => {
    return res.json({
        message: `Welcome, ${req.params.name}`
    });
});
app.listen(3000);