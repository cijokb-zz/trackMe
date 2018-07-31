// import { List, Map} from 'immutable';
//
// const initialState = Map({
//     isLoading: true,
//     users: List([]),
//     devices: List([])
// });

const initialState = {
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
    appStatus: {

    },
    userActions: {
        addTeam: {
            success: false,
            key: null,
            errorCode: '',
            errorDetails: ''
        },
        addDevice: {
            success: false,
            key: null,
            errorCode: '',
            errorDetails: ''
        }
    },
    devices: [],
    user: {
        photoURL: null,
        name: null,
        email: null,
        role: null,
        contactNo: null,
        userId: null,
        teamId: null
    },
    isLoading: false,
    snackBarMsg: {
        message: ''
    },
    dialogMsg: {
        message: ''
    },
};

export default initialState;
