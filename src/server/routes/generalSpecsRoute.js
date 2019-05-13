"use strict";
exports.__esModule = true;
/**
 * Importing dependencies.
 */
var express = require("express");
var os = require("os");
/**
 * Creating the generalSpecsRouter.
 */
var generalSpecsRouter = express.Router();
/**
 * Creating the endpoint.
 */
generalSpecsRouter.route('/')
    .get(function (req, res, next) {
    res.status(200);
    res.send(os.arch());
})
    .post(function (req, res, next) {
    res.status(303);
    res.redirect('/');
})
    .put(function (req, res, next) {
    res.status(303);
    res.redirect('/');
})["delete"](function (req, res, next) {
    res.status(303);
    res.redirect('/');
});
module.exports = generalSpecsRouter;
