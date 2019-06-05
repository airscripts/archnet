/**
 * Importing action types.
 */
import {
    ROOT_REQUEST,
    ROOT_SUCCESS,
    ROOT_FAILURE
} from '../types/rootTypes';

const rootEndpoint: string = "/root";

/**
 * Defining rootRequest action that takes a boolean as a parameter.
 */
export function rootRequest(newRequest: boolean) {
    return {
        type: ROOT_REQUEST,
        payload: newRequest
    };
}

/**
 * Defining rootSuccess action that takes an array of objects as a parameter.
 */
export function rootSuccess(rootDatas: Object[]) {
    return {
        type: ROOT_SUCCESS,
        payload: rootDatas
    };
}

/**
 * Defining rootFailure action that takes a boolean as a parameter.
 */
export function rootFailure(errorFound: boolean) {
    return {
        type: ROOT_FAILURE,
        payload: errorFound
    };
}

/**
 * Fetching all the data from the root endpoint.
 */

function getRoot() {
    return fetch(rootEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })

    .then(response => response.json(), error => { throw error });
}

export function loadRoot() {
    return ((dispatch: any) => {
        dispatch(rootRequest(true));
        
        getRoot()
        
        .then((data: any) => {
            dispatch(rootSuccess(data));
        })

        .catch((error: any) => {
            console.log(error);
            dispatch(rootFailure(true));
        });
    });
}





