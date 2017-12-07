// import { List, Map} from 'immutable';
//
// const initialState = Map({
//     isLoading: true,
//     users: List([]),
//     devices: List([])
// });

const initialState = {
    fireBase: {
        init: {
            success: null,
            errorCode: '',
            errorDetails: ''
        },
        auth: {
            isLogged: false,
            currentUserUID: null,
            initialized: false,
            photoURL: null,
            displayName: null,
            email: null,
            errorCode: '',
            errorDetails: ''
        },
    },
    appStatus: {

    },
    isLoading: false,
    snackBarMsg: ''
};

export default initialState;
