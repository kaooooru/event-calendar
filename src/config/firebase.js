import firebase from 'firebase/app';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyD9zXv4RxpzBGO--EEwwTNokygWiwWBFyU",
    authDomain: "event-calendar-5146d.firebaseapp.com",
    projectId: "event-calendar-5146d",
    storageBucket: "event-calendar-5146d.appspot.com",
    messagingSenderId: "500291240574",
    appId: "1:500291240574:web:a30a3106050d942ff34e2f"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;