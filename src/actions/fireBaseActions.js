// auth related actions

import FirebaseApi from '../api/firebase';
import * as types from './actionTypes';
import {beginAsyncCall, showingSnackBar, showingDailog} from './ajaxCallStatusActions';
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
    //browserHistory.push('/');
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

export function userCreationSuccess(user) {
    browserHistory.push('/');
    return {
        type: types.CREATE_USER_SUCCESS,
        user
    };
}

export function userCreationError(error) {
    return {
        type: types.CREATE_USER_ERROR,
        error
    };
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
        //dispatch(showingSnackBar('Login successfull'));
    };
}

export function signInWithEmailAuthProvider(email, password) {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        return FirebaseApi.signInWithEmailAndPassword(email, password)
            .then(
                user => {
                    dispatch(showingSnackBar('Login successfull'));
                    dispatch(authLoggedIn(user.uid));
                    browserHistory.push('/');
                })
            .catch(error => {
                dispatch(authLoginError(error));
                dispatch(beginAsyncCall(false));
                dispatch(showingDailog(error.message));
            });
    };
}

export function createUserWithEmailAndPassword(email, name, contactNo, password) {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        return FirebaseApi.createUserWithEmailAndPassword(email, password).then(user => {
            FirebaseApi.saveUserData(user.uid, email, name, contactNo);
            dispatch(userCreationSuccess(user));
            dispatch(beginAsyncCall(false));
            dispatch(showingSnackBar('User created successfully'));
        }).catch(error => {
            dispatch(userCreationError(error));
            dispatch(beginAsyncCall(false));
            //dispatch(showingSnackBar('!Oops User creation failed -' + error.message));
            dispatch(showingDailog(error.message));
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
                dispatch(showingDailog(error.message));
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

export function fetchDeviceDetails() {
    return (dispatch) => {
        //dispatch(beginAsyncCall(true));
        const data = FirebaseApi.getDatabaseValues('devices');
        data.on('value', function (snap) {
            const devices = [];
            snap.forEach(function (itemSnap) {
                const device = itemSnap.val();
                device.key = itemSnap.key;
                devices.push(device);
            });
            dispatch(fetchDeviceDetailsSuccess(devices));
        });
    };
}

export function fetchDeviceDetailsSuccess(devices) {
    return {
        type: types.FETCH_DEVICE_DETAILS, devices
    };
}

export function fetchUserInfo(userId) {
    return (dispatch) => {
        //dispatch(beginAsyncCall(true));
        const data = FirebaseApi.getDatabaseValues('users');
        data.on('value', function (snap) {
            const devices = [];
            snap.forEach(function (itemSnap) {
                const device = itemSnap.val();
                device.key = itemSnap.key;
                devices.push(device);
            });
            dispatch(fetchUserInfoSuccess(devices));
        });
    };
}

export function fetchUserInfoSuccess(user) {
    return {
        type: types.FETCH_USER_DETAILS, user
    };
}