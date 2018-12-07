var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express ();
var PORT = process.env.PORT || 3000; 

// static for css file
app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
    console.log("APP LISTENING ON PORT: " + PORT);
});

