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
        type: types.AUTH_LOGGED_IN_SUCCESS, user
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

export function signInWithEmailAuthProvider(user) {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        return FirebaseApi.signInWithEmailAndPassword(user)
            .then(
                user => {
                    dispatch(authLoggedIn(user.uid));
                })
            .catch(error => {
                dispatch(beginAsyncCall(false));
                // @TODO better error handling
                throw (error);
            });
    };
}

export function signInWithGoogleAuthProvider(user = 'cijo.kb@gmail.com') {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        return FirebaseApi.signInWithGoogleAuthProvider(user)
            .then(
                user => {
                    dispatch(beginAsyncCall(false));
                    dispatch(authLoggedIn(user));
                })
            .catch(error => {
                dispatch(beginAsyncCall(false));
                // @TODO better error handling
                throw (error);
            });
    };
}

export function signOut() {
    return (dispatch) => FirebaseApi.authSignOut().then(() => {
        dispatch(beginAsyncCall(false));
        dispatch(authLoggedOutSuccess());
        dispatch(showingSnackBar('Logout successfull'));
    }).catch((error) => {
        dispatch(beginAsyncCall(false));
        // @TODO better error handling
        throw (error);
    });
}
