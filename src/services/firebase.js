import firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

 var firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID

  apiKey: "AIzaSyBGYc_Gppn-xCrDwLFSKrs9ng-ChbH3aGQ",
  authDomain: "montana-rep-app.firebaseapp.com",
  databaseURL: "https://montana-rep-app-default-rtdb.firebaseio.com",
  projectId: "montana-rep-app",
  storageBucket: "montana-rep-app.appspot.com",
  messagingSenderId: "984948175715",
  appId: "1:984948175715:web:0a97e60e8bfa2f1c9d1956",
  stripeApiKey: "pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const db = firebase.firestore();
  const auth = firebase.auth();

  export default firebase;
  export {db, storage, auth, firebase};

