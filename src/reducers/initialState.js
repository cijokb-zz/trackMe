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
        }
    },
    appStatus: {

    },
    userActions: {
        addTeam: {
            success: false,
            key: null,
            errorCode: '',
            errorDetails: ''
        }
    },
    isLoading: false,
    snackBarMsg: '',
    dialogMsg: ''
};

export default initialState;
