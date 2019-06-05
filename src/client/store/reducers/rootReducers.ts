/**
 * Importing the interfaces and the actions from rootTypes file.
 */
import { 
    IRoot, 
    IRootActionTypes,
    ROOT_REQUEST, 
    ROOT_SUCCESS, 
    ROOT_FAILURE 
} from '../types/rootTypes';

/**
 * Declaring an inital state.
 */
const initialState: IRoot = {
    root: [],
    loading: true,
    error: false
}

/**
 * Defining the reducer that will be used for the root endpoint for dispatching actions result.
 */
export function rootReducer(state = initialState, action: IRootActionTypes): IRoot {
    switch (action.type) {
        case ROOT_REQUEST: {
            return {
                ...state,
                root: [],
                loading: action.payload,
                error: false
            };
        }

        case ROOT_SUCCESS: {
            return {
                ...state,
                root: action.payload,
                loading: false,
                error: false
            };
        }

        case ROOT_FAILURE: {
            return {
                ...state,
                root: [],
                loading: false,
                error: true
            };
        }

        default: {
            return state;
        }
    }
}


