import firebase from 'firebase';

 var firebaseConfig = {
  apiKey: "AIzaSyBAQJjazpLitn3aX03b799sLazq0EcMfQw",
  authDomain: "montana-rep-app-8a22e.firebaseapp.com",
  databaseURL: "https://montana-rep-app-8a22e-default-rtdb.firebaseio.com",
  projectId: "montana-rep-app-8a22e",
  storageBucket: "montana-rep-app-8a22e.appspot.com",
  messagingSenderId: "453795476842",
  appId: "1:453795476842:web:a602151f9b0e311aeae113"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default firebase;