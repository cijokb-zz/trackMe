import ajaxCallStatusReducer from './ajaxCallStatusReducer';
import initialState from './initialState';
import * as types from '../actions/actionTypes';

describe('reducers', () => {
    describe('ajaxCallStatusReducer', () => {
        it('should provide the initial state', () => {
            expect(ajaxCallStatusReducer(initialState, {})).toEqual(initialState);
        });

        it('should set the isLoading to false ', () => {
            expect(ajaxCallStatusReducer(initialState,
                {type: types.BEGIN_AJAX_CALL, callStatus: false })).toEqual(false);
        });
    });
});
