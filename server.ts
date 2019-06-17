/*
 * Defining the modules required for the server.
 */
const express = require("express");
const path = require("path");
const cors = require("cors");
const pug = require("pug");

/**
 * Importing routers.
 */
const rootRouter = require("./src/server/routes/rootRoute");
const ipRouter = require("./src/server/api/ipApi");

/*
 * Initializing the Express App.
 */
const app = express();

/**
 * Initializing pug.
 */
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./src/server/templates"));

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
app.use(express.static(path.join(__dirname, "build")));

/*
 * Redirecting all the routes that are not defined.
 */
app.use('*', function(req: any, res: any) {
  res.status(404);
  res.render("404", {error: res.statusCode});
});

/*
 * Setting the Express App to listen state.
 */
app.listen(port, () => {
  console.log(`Archie is listening on ${port}.`);
});