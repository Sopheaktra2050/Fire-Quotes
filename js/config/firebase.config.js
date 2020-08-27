var firebaseConfig = {
   apiKey: "AIzaSyDX54FBTUx9C_JLUh5rGym76nhsmyWyGJo",
    authDomain: "hate-efde6.firebaseapp.com",
    databaseURL: "https://hate-efde6.firebaseio.com",
    projectId: "hate-efde6",
    storageBucket: "hate-efde6.appspot.com",
    messagingSenderId: "442578680447",
    appId: "1:442578680447:web:81cc117a1a2dc84a8ddd4a",
    measurementId: "G-B14RBD4CRJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();
