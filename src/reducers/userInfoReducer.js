import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userInfoReducer(state = initialState.user, action) {
    switch (action.type) {
        case types.FETCH_USER_DETAILS:
            return Object.assign({}, state, {
                userId: action.user.uid, displayName: action.user.displayName,
                email: action.user.email, photoURL: action.user.photoURL,role : action.user.role,
            });
        default:
            return state;
    }
}