/**
 * Importing dependencies.
 */
const express = require("express");
const path = require('path');
const request = require('request');

/**
 * Importing API.
 */
const myipApi = require("../core/myipApi.js");

/**
 * Creating the rootRouter.
 */
const rootRouter = express.Router();

/**
 * Creating the endpoint.
 */
rootRouter.route('/')
/**
 * Checking if there is a request on other not concerned HTTP methods.
 */
.all((req: any, res: any, next: any) => {
  if(req.method !== "GET" && req.method !== "POST" && req.method !== "PUT" && req.method !== "DELETE") {
    res.status(405);
    res.render("405", {error: res.statusCode, method: req.method});
  }

  next();
})

.get(async (req: any, res: any, next: any) => {
  if(req.header("Content-Type") != "application/json") {
    res.status(405);
    res.render("405", {error: res.statusCode, method: req.method});
  }

  else {
    request(myipApi, function (error: any, response: any, body: any) {
      res.status(200);
      res.send(body);
    })
  }
})

.post((req: any, res: any, next: any) => {
  res.status(405);
  res.render("405", {error: res.statusCode, method: req.method});
})

.put((req: any, res: any, next: any) => {
  res.status(405);
  res.render("405", {error: res.statusCode, method: req.method});
})

.delete((req: any, res: any, next: any) => {
  res.status(405);
  res.render("405", {error: res.statusCode, method: req.method});
});

module.exports = rootRouter;

export {};