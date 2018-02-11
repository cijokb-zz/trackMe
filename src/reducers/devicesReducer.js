import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function devicesReducer (state = initialState.devices, action) {
    switch (action.type) {
      case types.FETCH_DEVICE_DETAILS:
        //return Object.assign([], state, action.devices);
        return [...action.devices];
      default:
        return state;
    }
}
