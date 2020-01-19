const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.end('hello world express');
});

app.listen(8081);