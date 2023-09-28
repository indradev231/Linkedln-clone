// import firebase from 'firebase';
// import * as firebase from 'firebase/app';

// import firebase from "firebase/app";
// import "firebase/database";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from "firebase/app";
// import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDESxOpf4nI9hMd6mkyqwBx--6rY4smCJk",
    authDomain: "linkedin-clone-yt-b7ef9.firebaseapp.com",
    projectId: "linkedin-clone-yt-b7ef9",
    storageBucket: "linkedin-clone-yt-b7ef9.appspot.com",
    messagingSenderId: "318998161999",
    appId: "1:318998161999:web:94c153885ebb6e1d79d83a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };