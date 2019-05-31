"use strict";
exports.__esModule = true;
/**
 * Importing action types.
 */
var generalTypes_1 = require("../types/generalTypes");
var generalEndpoint = "/general";
/**
 * Defining generalRequest action that takes a boolean as a parameter.
 */
function generalRequest(newRequest) {
    return {
        type: generalTypes_1.GENERAL_REQUEST,
        payload: newRequest
    };
}
exports.generalRequest = generalRequest;
/**
 * Defining generalSuccess action that takes an array of objects as a parameter.
 */
function generalSuccess(generalDatas) {
    return {
        type: generalTypes_1.GENERAL_SUCCESS,
        payload: generalDatas
    };
}
exports.generalSuccess = generalSuccess;
/**
 * Defining generalFailure action that takes a boolean as a parameter.
 */
function generalFailure(errorFound) {
    return {
        type: generalTypes_1.GENERAL_FAILURE,
        payload: errorFound
    };
}
exports.generalFailure = generalFailure;
/**
 * Fetching all the data from the general endpoint.
 */
function getGeneral() {
    return fetch(generalEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(function (response) { return response.json(); }, function (error) { throw error; });
}
function loadGeneral() {
    return (function (dispatch) {
        dispatch(generalRequest(true));
        getGeneral()
            .then(function (data) {
            dispatch(generalSuccess(data));
        })["catch"](function (error) {
            dispatch(generalFailure(true));
        });
    });
}
exports.loadGeneral = loadGeneral;
