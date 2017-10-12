import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID

};

// const config = {
//     apiKey: 'AIzaSyCYHnxrYBGnrwkMNe-_-fVXHZWDLJiX1bA',
//     authDomain: 'reacttrackme.firebaseapp.com',
//     databaseURL: 'https://reacttrackme.firebaseio.com',
//     projectId: 'reacttrackme',
//     storageBucket: 'reacttrackme.appspot.com',
//     messagingSenderId: '122657299032'
// };

firebase.initializeApp(config);

const database = firebase.database();

export default database;
