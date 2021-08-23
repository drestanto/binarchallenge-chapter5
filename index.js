const express = require("express");
const app = express();
const port = 3000;

function hello(req, res) {
	res.send("Hello world!");
}

function start() {
	console.log("Express Project listening at http://localhost:" + port);
}

app.get('/', hello);

app.listen(port, start);