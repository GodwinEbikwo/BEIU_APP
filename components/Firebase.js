import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXC2DJWH89ZuAFD-kA540P-QQGxsaNpsM",
  authDomain: "beiu-app.firebaseapp.com",
  databaseURL: "https://beiu-app.firebaseio.com",
  projectId: "beiu-app",
  storageBucket: "beiu-app.appspot.com",
  messagingSenderId: "1049582831992",
  appId: "1:1049582831992:web:c8881584befe53c142a08d"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);

export const auth = firebase.auth(app);

export default app;
