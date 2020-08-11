import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj-wI4blXoVZniYzoR38Rh3cMjh41tuWU",
  authDomain: "echo-fe0b8.firebaseapp.com",
  databaseURL: "https://echo-fe0b8.firebaseio.com",
  projectId: "echo-fe0b8",
  storageBucket: "echo-fe0b8.appspot.com",
  messagingSenderId: "1073761593124",
  appId: "1:1073761593124:web:56d733ad1ca6c8026c75b1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
