import * as firebase from 'firebase/firebase-browser';
import { firebaseConfig } from '../firebaseConfig';

export default class FireBaseApi {
    static initAuth() {
        firebase.initializeApp(firebaseConfig);
        return new Promise((resolve, reject) => {
            const unsub = firebase.auth().onAuthStateChanged(
                user => {
                    unsub();
                    resolve(user);
                },
                error => reject(error)
            );
        });
    }

    static authSignOut() {
        return firebase.auth().signOut();
    }

    static signInWithEmailAndPassword(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    static signInWithGoogleAuthProvider() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithRedirect(provider);
    }

    static createUserWithEmailAndPassword(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    static getDatabaseValues(key) {
        return firebase.database().ref(key);
    }

    static saveUserData(userId, email = null, name = null, contactNo = null, photoUrl = null, role = "user") {
        firebase.database().ref('users/' + userId).set({
            email: email,
            contactNo: contactNo,
            name: name,
            role: role,
            photoUrl: photoUrl
            //some more user data
        });
    }
}

