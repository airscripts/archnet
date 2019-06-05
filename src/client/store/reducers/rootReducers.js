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
 * Importing the interfaces and the actions from rootTypes file.
 */
var rootTypes_1 = require("../types/rootTypes");
/**
 * Declaring an inital state.
 */
var initialState = {
    root: [],
    loading: true,
    error: false
};
/**
 * Defining the reducer that will be used for the root endpoint for dispatching actions result.
 */
function rootReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case rootTypes_1.ROOT_REQUEST: {
            return __assign({}, state, { root: [], loading: action.payload, error: false });
        }
        case rootTypes_1.ROOT_SUCCESS: {
            return __assign({}, state, { root: action.payload, loading: false, error: false });
        }
        case rootTypes_1.ROOT_FAILURE: {
            return __assign({}, state, { root: [], loading: false, error: true });
        }
        default: {
            return state;
        }
    }
}
exports.rootReducer = rootReducer;
