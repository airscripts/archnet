/*
 * Defining the modules required for the server.
 */
var express = require('express');
var path = require('path');
/*
 * Initializing the Express App.
 */
var app = express();
/*
 * Defining useful constants.
 */
var port = process.env.PORT || 8080;
/*
 * Defining static files directory root.
 */
app.use(express.static(path.join(__dirname, 'build')));
/*
 * Redirecting all the routes that are not defined.
 */
app.use("*", function (req, res, next) {
    res.status(303);
    res.redirect('/');
});
/*
 * Setting the Express App to listen state.
 */
app.listen(port, function () {
    console.log("The server is listening on " + port + ".");
});
