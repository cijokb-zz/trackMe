/**
 * Created by cijo.kb on 07/05/17.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxCallStatusReducer (state = initialState.isLoading, action) {
    switch (action.type) {
    case types.BEGIN_AJAX_CALL:
        return action.callStatus;
    default :
        return state;
    }
}

