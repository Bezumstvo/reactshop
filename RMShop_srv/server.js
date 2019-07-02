require("rootpath")();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");
var path = require('path');     //used for file path
const app = express();


app.use(bodyParser.urlencoded({limit: '50mb',  extended: false }));
app.use(bodyParser.json ({limit: '50mb', extended: true}))
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
// use JWT auth to secure the api
app.use(jwt());
// global error handler
app.use(errorHandler);

// api routes
app.use("/users", require("./users/users.controller"));
app.use("/departments", require("./departments/departments.controller"));
app.use("/categories", require("./categories/categories.controller"));
app.use("/products", require("./products/products.controller"));
app.use('/files',require("./files/files.controller"));

// start server
const port = process.env.NODE_ENV === "production" ? 4000 : 4000;
const server = app.listen(port, function() {
  console.log("Server listening on port " + port);
});
