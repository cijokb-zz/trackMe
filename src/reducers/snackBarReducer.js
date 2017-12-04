import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function snackBarReducer (state = initialState.snackBarMsg, action) {
    switch (action.type) {
    case types.SHOWING_SNACKBAR:
        return action.message;
    default:
        return state;
    }
}
