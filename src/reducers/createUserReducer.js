import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function createUserReducer (state = initialState.user, action) {
    switch (action.type) {
    case types.CREATE_USER_SUCCESS:
        return Object.assign({}, state, {auth: Object.assign({}, state.auth,
            {isLogged: true, currentUserUID: action.user.uid, displayName: action.user.displayName,
                email: action.user.email, photoURL: action.user.photoURL})});
    case types.CREATE_USER_ERROR:
        return Object.assign({}, state, {auth: Object.assign({}, state.auth,
            {isLogged: false, errorCode: action.error.code, errorDetails: action.error.message})});
    default:
        return state;
    }
}
