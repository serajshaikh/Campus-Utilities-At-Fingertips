import firebase from 'firebase'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzXwheJoJQzkeGQPUlwhQ8DDjzDVCi2ts",
    authDomain: "classroom-b27a6.firebaseapp.com",
    projectId: "classroom-b27a6",
    storageBucket: "classroom-b27a6.appspot.com",
    messagingSenderId: "57095789413",
    appId: "1:57095789413:web:aad36b88b38f9cfb029f8c",
    measurementId: "G-PEDJFEY5K8"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage}
export default db;
