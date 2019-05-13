/**
 * Importing dependencies.
 */
const express = require("express");
const os = require("os");

/**
 * Creating the generalSpecsRouter.
 */
const generalSpecsRouter = express.Router();

/**
 * Creating the endpoint.
 */
generalSpecsRouter.route('/')
.get((req: any, res: any, next: any) => {
  res.status(200);
  res.send(os.arch());
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

module.exports = generalSpecsRouter;