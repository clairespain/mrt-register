import firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

 var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
  };

  const fire = firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const db = firebase.firestore();
  const auth = firebase.auth();

  export default firebase;
  export {db, storage, auth, firebase};

