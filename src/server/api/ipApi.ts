/**
 * Importing dependencies.
 */
const express = require("express");
const request = require('request');


/**
 * Importing API.
 */
const myipApi = require("../core/myipApi.js");

/**
 * Creating the rootRouter.
 */
const ipRouter = express.Router();

/**
 * Creating the endpoint.
 */
ipRouter.route('/')
.get(async (req: any, res: any, next: any) => {
  if(req.header("Content-Type") != "application/json") {
    request(myipApi, function (error: any, response: any, body: any) {
      res.status(200);
      res.header("Content-Type", "application/json");

      res.send(
        "Hello, surfer! :)"
        + "\nHere it is the information that you have requested for: "
        + "\n\n=> " + body + "\n\n"
        + "Thank you! Come back again!\n"
      );
    });
  }

  else {
    request(myipApi, function (error: any, response: any, body: any) {
      res.status(200);
      res.header("Content-Type", "application/json");
      res.send(body);
    });
  }
})

.post((req: any, res: any, next: any) => {
  res.status(405);
  res.end("Error: POST Operation not supported.");
})

.put((req: any, res: any, next: any) => {
  res.status(405);
  res.end("Error: PUT Operation not supported.");
})

.delete((req: any, res: any, next: any) => {
  res.status(405);
  res.end("Error: DELETE Operation not supported");
});

module.exports = ipRouter;

export {};