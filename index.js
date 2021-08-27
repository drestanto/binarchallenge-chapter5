// ----------========== INITIATE ==========----------

const express = require("express");
const app = express();

app.set("view engine", "ejs");
const port = 3000;

function start() {
    console.log("Express project listening at http://localhost:" + port);
}

app.listen(port, start);

// ----------==============================----------

// STATIC DATA
users = require("./db/users.json")

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// CONTROLLER
const indexController = require("./controller/index.js");
const gameController = require("./controller/game.js");
const userController = require("./controller/user.js");

// ROUTES
app.get('/', indexController.index);
app.get('/game', gameController.index);
app.get('/users', userController.get);
app.get('/login', userController.index);
app.post('/login', userController.login);