// ----------========== INITIATE ==========----------

const express = require("express");
const app = express();
const port = 3000;

function start() {
    console.log("Express project listening at http://localhost:" + port);
}

app.listen(port, start);

// ----------==============================----------

// CONTROLLERS
const indexController = require("./controller/index.js");

// ROUTES
app.get('/', indexController.index);
