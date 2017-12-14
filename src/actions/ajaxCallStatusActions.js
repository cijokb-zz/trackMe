import * as types from './actionTypes';

export function beginAsyncCall(callStatus) {
    return {type: types.BEGIN_ASYNC_CALL, callStatus};
}

export function showingSnackBar (message) {
    return {type: types.SHOWING_SNACKBAR, message};
}

export function showingDailog(message) {
    return {type: types.SHOWING_DIALOG, message};
}
