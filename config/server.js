var consign = require("consign");
var express = require("express");


var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./app/public"));

consign()
.include('app/routes')
.then('config/dbConnection.js')
.into(app);

module.exports = app;
 