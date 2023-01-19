import express from "express";
import request from "request";
import { Request, Response, NextFunction } from "express";

import { MY_IP_API } from "../constants/ip";

const ipRouter = express.Router();

ipRouter.route('/')
.get(async (req: Request, res: Response, next: NextFunction) => {
  request(MY_IP_API, function (error: any, response: any, body: any) {
    res.status(200);
    res.header("Content-Type", "application/json");
    res.send(body);
  });
});

export default ipRouter;