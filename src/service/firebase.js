import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
};

const fbApp = firebase.initializeApp(firebaseConfig);

export const fbAuth = fbApp.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export const githubAuth = new firebase.auth.GithubAuthProvider();
export const authPersistence = firebase.auth.Auth.Persistence.SESSION;

export const fbFirestore = fbApp.firestore();
