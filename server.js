var express = require("express");

var path = require('path');

var app = express();

// screen case/ enviornment files require it to be caps
var PORT = process.env.PORT || 1234;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  