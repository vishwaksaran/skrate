import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyksZF_v-_l97R5dUwbO9MG99sMKwo1Xo",
  authDomain: "skrate-oauth.firebaseapp.com",
  projectId: "skrate-oauth",
  storageBucket: "skrate-oauth.appspot.com",
  messagingSenderId: "358424983844",
  appId: "1:358424983844:web:cf2be02f7b3620c9c8dbb1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleprovider = new firebase.auth.GoogleAuthProvider();

export { auth, googleprovider };
