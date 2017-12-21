import * as types from './actionTypes';
import { browserHistory } from 'react-router';
import {beginAsyncCall, showingSnackBar} from './ajaxCallStatusActions';
import FirebaseApi from '../api/firebase';

export function menuItemClick(item) {
    browserHistory.push('/' + item);
    return {type: types.MENU_ITEM_CLICK};
}
export function createTeam(team) {
    return (dispatch) => {
        dispatch(beginAsyncCall(true));
        FirebaseApi.getDatabaseValues('teams').push(team).then(success => {
            dispatch(beginAsyncCall(false));
            dispatch(createTeamSuccess(success.key));
            dispatch(showingSnackBar('Team added successfully'));
        }).catch(error => {
            dispatch(beginAsyncCall(false));
            dispatch(createTeamError(error));
            dispatch(showingSnackBar('!Oops something went wrong'));
        });
    };
}

export function createTeamSuccess(key) {
    return {type: types.CREATE_TEAM_SUCCESS, key};
}

export function createTeamError(error) {
    return {type: types.CREATE_TEAM_ERROR, error};
}
