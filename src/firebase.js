// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA5O_rj_HM66UyatSF4lfHN49URrFE9WG0",
    authDomain: "discord-clone-d9057.firebaseapp.com",
    projectId: "discord-clone-d9057",
    storageBucket: "discord-clone-d9057.appspot.com",
    messagingSenderId: "354844309998",
    appId: "1:354844309998:web:b99c05c45455d64aac76ff"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};