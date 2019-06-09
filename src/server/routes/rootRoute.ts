/**
 * Importing dependencies.
 */
const express = require("express");
const os = require("os");
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

/**
 * Importing API.
 */
const myipApi = require("../api/myipApi.js");

/**
 * Creating the rootRouter.
 */
const rootRouter = express.Router();

/**
 * Defining a sleep function
 */
function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * Creating the endpoint.
 */
rootRouter.route('/')
.get(async (req: any, res: any, next: any) => {
  if(req.header("Content-Type") != "application/json") {
    res.status(404);
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
  res.status(303);
  res.redirect('/');
})

.put((req: any, res: any, next: any) => {
  res.status(303);
  res.redirect('/');
})

.delete((req: any, res: any, next: any) => {
  res.status(303);
  res.redirect('/');
});

module.exports = rootRouter;

export {};