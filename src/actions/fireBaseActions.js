// auth related actions

import FirebaseApi from '../api/firebase';
import * as types from './actionTypes';
import {beginAsyncCall, showingSnackBar} from './ajaxCallStatusActions';
import { browserHistory } from 'react-router';

export function fireBaseInitDone(initStatus) {
    return {type: types.FIREBASE_INIT, initStatus};
}


export function initApp() {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        FirebaseApi.initAuth().then(
            user => {
                dispatch(fireBaseInitDone(true));
                dispatch(authInitialized(user));
            }
        ).catch(
            error => {
                dispatch(beginAsyncCall(false));
                dispatch(fireBaseInitError(error));
            });
    };
}

export function fireBaseInitError(error) {
    browserHistory.push('/error');
    return {type: types.FIREBASE_INIT_ERROR, error};
}


export function authInitializedDone() {
    return {
        type: types.AUTH_INITIALIZATION_DONE
    };
}

export function authLoggedInSuccess(user) {
    browserHistory.push('/');
    return {
        type: types.AUTH_LOGIN_SUCCESS, user
    };
}

export function authLoginError(error) {
    return {
        type: types.AUTH_LOGIN_ERROR,
        error
    };
}

export function authLogoutError(error) {
    return {
        type: types.AUTH_LOGOUT_ERROR,
        error
    };
}

export function authLoggedOutSuccess() {
    browserHistory.push('/login');
    return {type: types.AUTH_LOGGED_OUT_SUCCESS};
}



export function authInitialized(user) {
    return (dispatch) => {
        dispatch(authInitializedDone());
        if (user) {
            dispatch(authLoggedIn(user));
        } else {
            //show the login screen
            dispatch(authLoggedOutSuccess());
            dispatch(beginAsyncCall(false));
        }
    };
}


export function authLoggedIn(user) {
    return (dispatch) => {
        dispatch(beginAsyncCall(false));

        dispatch(authLoggedInSuccess(user));
        dispatch(showingSnackBar('Login successfull'));
        // dispatch(beginAsyncCall());
        // firebaseApi.GetChildAddedByKeyOnce('/users', userUID)
        //     .then(
        //         user => {
        //             dispatch(userLoadedSuccess(user.val()));
        //             dispatch(push('/'));
        //         })
        //     .catch(
        //         error => {
        //             dispatch(beginAsyncCall());
        //             // @TODO better error handling
        //             throw (error);
        //         });
    };
}

export function signInWithEmailAuthProvider(email, password) {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        return FirebaseApi.signInWithEmailAndPassword(email, password)
            .then(
                user => {
                    dispatch(authLoggedIn(user.uid));
                })
            .catch(error => {
                dispatch(authLoginError(error));
                dispatch(beginAsyncCall(false));
            });
    };
}

export function createUserWithEmailAndPassword(email, password) {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        return FirebaseApi.createUserWithEmailAndPassword(email, password).then(user => {
            //dispatch(userCreated(user));
        }).catch(error => {
            dispatch(beginAsyncCall(false));
            // @TODO better error handling
        });
    };
}

export function signInWithGoogleAuthProvider() {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        return FirebaseApi.signInWithGoogleAuthProvider()
            .then(
                user => {
                    dispatch(beginAsyncCall(false));
                    dispatch(authLoggedIn(user));
                })
            .catch(error => {
                dispatch(authLoginError(error));
                dispatch(beginAsyncCall(false));
            });
    };
}

export function signOut() {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        FirebaseApi.authSignOut().then(() => {
            dispatch(beginAsyncCall(false));
            dispatch(authLoggedOutSuccess());
            dispatch(showingSnackBar('Logout successfull'));
        }).catch((error) => {
            dispatch(beginAsyncCall(false));
            // @TODO better error handling
            throw (error);
        });
    };
}
