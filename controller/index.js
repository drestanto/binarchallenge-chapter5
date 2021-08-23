const path = require('path');

function index(req, res) {
    res.send("Hello world!");
}

module.exports = {
    index
}