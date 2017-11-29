import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function appStatusReducer (state = initialState.appStatus, action) {
    switch (action.type) {
    case types.INIT_APP_ERROR:
        return Object.assign({}, state, {appInit: {success: false,
            errorCode: action.error.code,
            errorDetails: action.error.message}});
    default:
        return state;
    }
}
