const express = require("express");
const request = require("request");
const ip = require("../constants/ip");

const ipRouter = express.Router();

ipRouter.route('/')
.get(async (req: any, res: any, next: any) => {
  if(req.header("Content-Type") != "application/json") {
    request(ip.MY_IP_API, function (error: any, response: any, body: any) {
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
    request(ip.MY_IP_API, function (error: any, response: any, body: any) {
      res.status(200);
      res.header("Content-Type", "application/json");
      res.send(body);
    });
  }
});

export default ipRouter;