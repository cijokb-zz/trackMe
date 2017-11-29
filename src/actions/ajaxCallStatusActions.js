import * as types from './actionTypes';

export function beginAsyncCall(callStatus) {
    return {type: types.BEGIN_ASYNC_CALL, callStatus};
}


