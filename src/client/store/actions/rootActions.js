"use strict";
exports.__esModule = true;
/**
 * Importing action types.
 */
var rootTypes_1 = require("../types/rootTypes");
var rootEndpoint = "/root";
/**
 * Defining rootRequest action that takes a boolean as a parameter.
 */
function rootRequest(newRequest) {
    return {
        type: rootTypes_1.ROOT_REQUEST,
        payload: newRequest
    };
}
exports.rootRequest = rootRequest;
/**
 * Defining rootSuccess action that takes an array of objects as a parameter.
 */
function rootSuccess(rootDatas) {
    return {
        type: rootTypes_1.ROOT_SUCCESS,
        payload: rootDatas
    };
}
exports.rootSuccess = rootSuccess;
/**
 * Defining rootFailure action that takes a boolean as a parameter.
 */
function rootFailure(errorFound) {
    return {
        type: rootTypes_1.ROOT_FAILURE,
        payload: errorFound
    };
}
exports.rootFailure = rootFailure;
/**
 * Fetching all the data from the root endpoint.
 */
function getRoot() {
    return fetch(rootEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(function (response) { return response.json(); }, function (error) { throw error; });
}
function loadRoot() {
    return (function (dispatch) {
        dispatch(rootRequest(true));
        getRoot()
            .then(function (data) {
            dispatch(rootSuccess(data));
        })["catch"](function (error) {
            console.log(error);
            dispatch(rootFailure(true));
        });
    });
}
exports.loadRoot = loadRoot;
