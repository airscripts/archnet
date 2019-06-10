/*
 * Defining the modules required for the server.
 */
var express = require('express');
var path = require('path');
var cors = require('cors');
/**
 * Importing routers.
 */
var rootRouter = require("./src/server/routes/rootRoute");
/*
 * Initializing the Express App.
 */
var app = express();
/*
 * Defining useful constants.
 */
var port = process.env.PORT || 8080;
/**
 * Setting the endpoints.
 */
app.use("/root", rootRouter);
/**
 * Setting up the use of CORS Policy.
 */
app.use(cors());
app.options('*', cors());
/*
 * Defining static files directory root.
 */
app.use(express.static(path.join(__dirname, 'build')));
/*
 * Redirecting all the routes that are not defined.
 */
app.use("*", function (req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname, "./build", "index.html"));
});
/*
 * Setting the Express App to listen state.
 */
app.listen(port, function () {
    console.log("The server is listening on " + port + ".");
});
