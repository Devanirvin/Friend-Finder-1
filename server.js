// dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("I can here you on PORT: " + PORT);
});