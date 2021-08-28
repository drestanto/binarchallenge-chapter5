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
app.get('/user', userController.getById);
app.get('/login', userController.loginIndex);
app.post('/login', userController.login);