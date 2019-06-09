/**
 * Setting up the interface for root data.
 */
export interface IRoot {
  root: object,
  loading: boolean,
  error: boolean
};

/**
 * Describing the actions involved.
 */
export const ROOT_REQUEST = "ROOT_REQUEST";
export const ROOT_SUCCESS = "ROOT_SUCCESS";
export const ROOT_FAILURE = "ROOT_FAILURE";

/**
 * Describing the interface of those actions.
 */
interface IRootRequestAction {
  type: typeof ROOT_REQUEST,
  payload: boolean
};

interface IRootSuccessAction {
  type: typeof ROOT_SUCCESS,
  payload: object
};

interface IRootFailureAction {
  type: typeof ROOT_FAILURE,
  payload: boolean
};

/**
 * Exporting all the interfaces in one.
 */
export type IRootActionTypes = IRootRequestAction | IRootSuccessAction | IRootFailureAction;