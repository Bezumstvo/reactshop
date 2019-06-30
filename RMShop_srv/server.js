require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");

app.use(bodyParser.urlencoded({limit: '50mb',  extended: false }));
//app.use(bodyParser.json());
app.use(bodyParser.json ({limit: '50mb', extended: true}))

app.use(cors());
//test
// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/users", require("./users/users.controller"));
app.use("/departments", require("./departments/departments.controller"));
app.use("/categories", require("./categories/categories.controller"));
app.use("/products", require("./products/products.controller"));
app.use("/files", require("./files/files.controller"));
// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === "production" ? 4000 : 4000;
const server = app.listen(port, function() {
  console.log("Server listening on port " + port);
});
