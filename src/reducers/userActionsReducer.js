import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userActionsReducer (state = initialState.userActions, action) {
    switch (action.type) {
    case types.CREATE_TEAM_SUCCESS:
        return Object.assign({}, state, {addTeam: Object.assign({}, state.addTeam, {success: true, key: action.key})});
    case types.CREATE_TEAM_ERROR:
        return Object.assign({}, state, {addTeam: Object.assign({}, state.addTeam, {success: false, key: null,
            errorCode: action.error.code,
            errorDetails: action.error.message})});
    default:
        return state;
    }
}
