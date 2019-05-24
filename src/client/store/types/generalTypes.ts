/**
 * Setting up the interface for general data.
 */
export interface IGeneral {
  data: Object[],
  loading: boolean,
  error: boolean
};

/**
 * Describing the actions involved.
 */
export const GENERAL_REQUEST = "GENERAL_REQUEST";
export const GENERAL_SUCCESS = "GENERAL_SUCCESS";
export const GENERAL_FAILURE = "GENERAL_FAILURE";

/**
 * Describing the interface of those actions.
 */
interface IGeneralRequestAction {
  type: typeof GENERAL_REQUEST,
  payload: boolean
};

interface IGeneralSuccessAction {
  type: typeof GENERAL_SUCCESS,
  payload: Object[]
};

interface IGeneralFailureAction {
  type: typeof GENERAL_FAILURE,
  payload: boolean
};

/**
 * Exporting all the interfaces in one.
 */
export type IGeneralActionTypes = IGeneralRequestAction | IGeneralSuccessAction | IGeneralFailureAction;