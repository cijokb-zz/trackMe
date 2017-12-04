import * as types from './actionTypes';

export function beginAsyncCall(callStatus) {
    return {type: types.BEGIN_ASYNC_CALL, callStatus};
}

export function showingSnackBar (message) {
    return {type: types.SHOWING_SNACKBAR, show: true, message};
}

