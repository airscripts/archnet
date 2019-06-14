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
.get(async (req: any, res: any, next: any) => {
  if(req.header("Content-Type") != "application/json") {
    res.status(405);
    res.sendFile(path.join(__dirname, "../../../build", "index.html"));
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
  res.sendFile(path.join(__dirname, "../../../build", "index.html"));
})

.put((req: any, res: any, next: any) => {
  res.status(405);
  res.sendFile(path.join(__dirname, "../../../build", "index.html"));
})

.delete((req: any, res: any, next: any) => {
  res.status(405);
  res.sendFile(path.join(__dirname, "../../../build", "index.html"));
});

module.exports = rootRouter;

export {};