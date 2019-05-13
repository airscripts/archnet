/*
 * Defining the modules required for the server.
 */
const express = require('express');
const path = require('path');
const os = require('os');

/**
 * Importing routers.
 */
const generalSpecsRouter = require("./src/server/routes/generalSpecsRoute.js");

/*
 * Initializing the Express App.
 */
const app = express();

/*
 * Defining useful constants.
 */
const port = process.env.PORT || 8080;

/**
 * Setting the endpoints.
 */
app.use("/general", generalSpecsRouter);

/*
 * Defining static files directory root.
 */
app.use(express.static(path.join(__dirname, 'build')));

/*
 * Redirecting all the routes that are not defined.
 */
app.use("*", function (req: any, res: any, next: any) {
  res.status(303);
  res.redirect('/');
});

/*
 * Setting the Express App to listen state.
 */
app.listen(port, () => {
  console.log(`The server is listening on ${port}.`);
});