// Declaring Dependencies
var express = require("express");
var methodOverride = require("method-override"); 
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Create an instance of the express app
var app = express();
var routes = require("./controller/burgers_controller");

// Declare the port
var port = 3306;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', routes);

// Activate listener
app.listen(port);