import firebase from 'firebase/app'
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyBq_fxe0tQ9WhINyUUqBFE-cWETz2APJ2E",
    authDomain: "fullcalendar-62a54.firebaseapp.com",
    databaseURL: "https://fullcalendar-62a54.firebaseio.com",
    projectId: "fullcalendar-62a54",
    storageBucket: "fullcalendar-62a54.appspot.com",
    messagingSenderId: "461231220157",
    appId: "1:461231220157:web:5ec3ff50536a5140"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage=firebase.storage();
  export {
      storage,firebase as default
  }