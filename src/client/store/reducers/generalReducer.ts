/**
 * Importing the interfaces and the actions from generalTypes file.
 */
import { 
    IGeneral, 
    IGeneralActionTypes,
    GENERAL_REQUEST, 
    GENERAL_SUCCESS, 
    GENERAL_FAILURE 
} from '../types/generalTypes';

/**
 * Declaring an inital state.
 */
const initialState: IGeneral = {
    data: [],
    loading: true,
    error: false
}

/**
 * Defining the reducer that will be used for the general endpoint for dispatching actions result.
 */
export function generalReducer(state = initialState, action: IGeneralActionTypes): IGeneral {
    switch (action.type) {
        case GENERAL_REQUEST: {
            return {
                ...state,
                data: [],
                loading: action.payload,
                error: false
            };
        }

        case GENERAL_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            };
        }

        case GENERAL_FAILURE: {
            return {
                ...state,
                data: [],
                loading: false,
                error: true
            };
        }

        default: {
            return state;
        }
    }
}


