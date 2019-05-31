"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/**
 * Importing the interfaces and the actions from generalTypes file.
 */
var generalTypes_1 = require("../types/generalTypes");
/**
 * Declaring an inital state.
 */
var initialState = {
    data: [],
    loading: true,
    error: false
};
/**
 * Defining the reducer that will be used for the general endpoint for dispatching actions result.
 */
function generalReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case generalTypes_1.GENERAL_REQUEST: {
            return __assign({}, state, { data: [], loading: action.payload, error: false });
        }
        case generalTypes_1.GENERAL_SUCCESS: {
            return __assign({}, state, { data: action.payload, loading: false, error: false });
        }
        case generalTypes_1.GENERAL_FAILURE: {
            return __assign({}, state, { data: [], loading: false, error: true });
        }
        default: {
            return state;
        }
    }
}
exports.generalReducer = generalReducer;
