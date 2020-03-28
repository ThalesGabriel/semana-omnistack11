import {
  SIGNUP_REQUESTED,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_REQUESTED,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  DELETE_REQUESTED,
  DELETE_SUCCESS,
  DELETE_FAIL,
  UPDATE_REQUESTED,
  UPDATE_SUCCESS,
  UPDATE_FAIL
} from '../types';

const initialState = {
  user: null,
  loading: false,
  success: false,
  error: null,
  incidents: [],
  charge: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUESTED:
      return Object.assign({}, state, { loading: true, user: null, error: null });
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, { loading: false, success: true, error: null, user: action.user });
    case SIGNUP_FAIL:
      return Object.assign({}, state, { loading: false, error: action.error, success: false, user: null });
    case SIGNIN_REQUESTED:
      return Object.assign({}, state, { loading: true });
    case SIGNIN_SUCCESS:
      return Object.assign({}, state, { loading: false, success: true, error: false, user: action.user });
    case SIGNIN_FAIL:
      return Object.assign({}, state, { loading: false, error: action.error, success: false, user: null });
    case DELETE_REQUESTED:
      return Object.assign({}, state, { loading: true });
    case DELETE_SUCCESS:
      return Object.assign({}, state, { loading: false, success: true, error: false, incidents: action.incidents });
    case DELETE_FAIL:
      return Object.assign({}, state, { loading: false, error: action.error, success: false, incidents: [] });
    case UPDATE_REQUESTED:
      return Object.assign({}, state, { loading: true });
    case UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false, success: true, error: false, incidents: action.incidents });
    case UPDATE_FAIL:
      return Object.assign({}, state, { loading: false, error: action.error, success: false, incidents: [] });
    default:
      return state;
  }
};