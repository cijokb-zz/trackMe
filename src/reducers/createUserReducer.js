import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function createUserReducer (state = initialState.users, action) {
    switch (action.type) {
    case types.CREATE_USER:
        //return state.set('users', action.user);
        return [...state, Object.assign({}, action.users)];
    default :
        return state;
    }
}

