import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgkz7O-zep48GAR9BKpWRNB_QuxbMXlDI",
    authDomain: "signal-clone-9a800.firebaseapp.com",
    projectId: "signal-clone-9a800",
    storageBucket: "signal-clone-9a800.appspot.com",
    messagingSenderId: "1064571974352",
    appId: "1:1064571974352:web:e1ec12ef9af3e3ef4364d5"
  };

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
