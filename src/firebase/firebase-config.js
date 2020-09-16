import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAum_q6SYtGF6n1mz9_hyKSIYuVjxuSlU4",
    authDomain: "react-app-18747.firebaseapp.com",
    databaseURL: "https://react-app-18747.firebaseio.com",
    projectId: "react-app-18747",
    storageBucket: "react-app-18747.appspot.com",
    messagingSenderId: "125970180886",
    appId: "1:125970180886:web:0c18c85a1482ae1869fe37"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }