"use strict";
exports.__esModule = true;
/**
 * Importing dependencies.
 */
var express = require("express");
var os = require("os");
/**
 * Creating the rootRouter.
 */
var rootRouter = express.Router();
/**
 * Creating the endpoint.
 */
rootRouter.route('/')
    .get(function (req, res, next) {
    res.status(200);
    var specsList = [
        os.arch(),
    ];
    console.log(specsList);
    res.send(specsList);
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
module.exports = rootRouter;
