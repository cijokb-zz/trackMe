import * as types from './actionTypes';

export function beginAjaxCall(callStatus) {
    return {type: types.BEGIN_AJAX_CALL, callStatus};
}


