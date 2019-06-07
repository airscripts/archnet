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
app.use("*", function(req: any, res: any, next: any) {
  res.status(303);
  res.redirect('/');
});

/*
 * Setting the Express App to listen state.
 */
app.listen(port, () => {
  console.log(`The server is listening on ${port}.`);
});