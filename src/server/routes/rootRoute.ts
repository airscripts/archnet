/**
 * Importing dependencies.
 */
const express = require("express");
const os = require("os");

/**
 * Creating the rootRouter.
 */
const rootRouter = express.Router();

/**
 * Creating the endpoint.
 */
rootRouter.route('/')
.get((req: any, res: any, next: any) => {
  res.status(200);

  let specsList: Object[] = [
    os.arch(), 
  ];

  console.log(specsList);
  res.send(specsList);
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