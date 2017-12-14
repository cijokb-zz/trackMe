import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dialogReducer (state = initialState.dialogMsg, action) {
    switch (action.type) {
    case types.SHOWING_DIALOG:
        return action.message;
    default:
        return state;
    }
}
