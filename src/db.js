

import firebase from "firebase/app";
import "firebase/database";


const config={
    apiKey: "AIzaSyBU7r1QFkkhgOKaOd8e1h-wetwKMJkVR24",
    authDomain: "chatapp-106e8.firebaseapp.com",
    databaseURL: "https://chatapp-106e8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatapp-106e8",
    storageBucket: "chatapp-106e8.appspot.com",
    messagingSenderId: "85304872250",
    appId: "1:85304872250:web:d03dcf77ec7e061fe89403",
    measurementId: "G-2DKH195TDQ"
}

const db = firebase.initializeApp(config)
export default db