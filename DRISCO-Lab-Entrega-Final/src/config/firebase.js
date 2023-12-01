import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAe4pM-kcMU-7UA0nWdFAwWW5NBgzMGIwI",
  authDomain: "drisco-lab.firebaseapp.com",
  projectId: "drisco-lab",
  storageBucket: "drisco-lab.appspot.com",
  messagingSenderId: "393012443269",
  appId: "1:393012443269:web:3f5319f9cfb7b0e07751ec"
};

export const appFireBase = firebase.initializeApp(firebaseConfig);

export const authFireBase = firebase.auth(appFireBase)
export const googleAuth = new firebase.auth.GoogleAuthProvider()
