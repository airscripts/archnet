/*
 * Defining the modules required for the server.
 */
const express = require('express');
const path = require('path');
const cors = require('cors');

/**
 * Importing routers.
 */
const rootRouter = require("./src/server/routes/rootRoute");
const ipRouter = require("./src/server/api/ipApi");

/*
 * Initializing the Express App.
 */
const app = express();

/*
 * Defining useful constants.
 */
const port = process.env.PORT || 8080;

/**
 * Setting the core endpoints.
 */
app.use("/root", rootRouter);


/**
 * Setting the api endpoints.
 */
app.use("/api/ip", ipRouter);

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
app.use("*", function(req: any, res: any, next: any) {
  res.status(404);
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

/*
 * Setting the Express App to listen state.
 */
app.listen(port, () => {
  console.log(`Archie is listening on ${port}.`);
});