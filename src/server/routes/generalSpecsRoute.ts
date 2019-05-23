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

  let specsList: Object[] = [
    os.arch(), 
    os.cpus(), 
    os.endianness(), 
    os.freemem(),
    os.homedir(),
    os.hostname(),
    os.networkInterfaces(),
    os.platform(),
    os.release(),
    os.uptime(),
    os.userInfo(),
  ];

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

module.exports = generalSpecsRouter;

export {};