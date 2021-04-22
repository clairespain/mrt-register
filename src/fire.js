import firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

 var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID

  // apiKey: "AIzaSyBAQJjazpLitn3aX03b799sLazq0EcMfQw",
  // authDomain: "montana-rep-app-8a22e.firebaseapp.com",
  // databaseURL: "https://montana-rep-app-8a22e-default-rtdb.firebaseio.com",
  // projectId: "montana-rep-app-8a22e",
  // storageBucket: "montana-rep-app-8a22e.appspot.com",
  // messagingSenderId: "453795476842",
  // appId: "1:453795476842:web:a602151f9b0e311aeae113"
  };

    // if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
    // if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
    // if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
    // if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
    // if (!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential: messagingSenderId");
    // if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const db = firebase.firestore();

  export default firebase;
  export {db, storage, firebase};
