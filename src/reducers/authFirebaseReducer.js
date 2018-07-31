import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authFireBaseReducer(state = initialState.auth, action) {
    switch (action.type) {
        case types.AUTH_INITIALIZATION_DONE:
            return Object.assign({}, state, { initialized: true });
        case types.AUTH_LOGIN_SUCCESS:
            return Object.assign({}, state,
                {
                    isLogged: true, currentUserUID: action.user.uid, displayName: action.user.displayName,
                    email: action.user.email, photoURL: action.user.photoURL
                });
        case types.AUTH_LOGGED_OUT_SUCCESS:
            return Object.assign({}, state, {
                isLogged: false,
                currentUserUID: null, displayName: null, email: null, photoURL: null
            });
        case types.AUTH_LOGIN_ERROR:
            return Object.assign({},
                { isLogged: false, errorCode: action.error.code, errorDetails: action.error.message });
        default:
            return state;
    }
}

