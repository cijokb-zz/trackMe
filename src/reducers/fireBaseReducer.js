import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function fireBaseReducer (state = initialState.fireBase, action) {
    switch (action.type) {
    case types.FIREBASE_INIT:
        return Object.assign({}, state, {init: Object.assign({}, state.init, {success: action.initStatus})});
        //return {...state,auth:{...state.auth,user:action.user}};

    case types.FIREBASE_INIT_ERROR :
        return Object.assign({}, state, {init: Object.assign({}, state.init, {success: false,
            errorCode: action.error.code,
            errorDetails: action.error.message})});
        //return {...state,init:{...state.init,success:false,
        // errorCode:action.error.code,errorDetails:action.error.message}};

    case types.AUTH_INITIALIZATION_DONE :
        return Object.assign({}, state, {auth: Object.assign({}, state.auth, {initialized: true})});

    case types.AUTH_LOGIN_SUCCESS:
        return Object.assign({}, state, {auth: Object.assign({}, state.auth,
            {isLogged: true, currentUserUID: action.user.uid, displayName: action.user.displayName,
                email: action.user.email, photoURL: action.user.photoURL})});

    case types.AUTH_LOGGED_OUT_SUCCESS:
        return Object.assign({}, state, {auth: Object.assign({}, state.auth, {isLogged: false,
            currentUserUID: null, displayName: null, email: null, photoURL: null})});
    case types.AUTH_LOGIN_ERROR:
        return Object.assign({}, state, {auth: Object.assign({}, state.auth,
            {isLogged: false, errorCode: action.error.code, errorDetails: action.error.message})});
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
