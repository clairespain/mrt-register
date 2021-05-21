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

  apiKey: "AIzaSyBDi0_pQP2SxjdR0OfeV_ATO0E7z_OD_aE",
  authDomain: "montana-rep-app-testing.firebaseapp.com",
  databaseURL: "https://montana-rep-app-testing-default-rtdb.firebaseio.com/",
  projectId: "montana-rep-app-testing",
  storageBucket: "montana-rep-app-testing.appspot.com",
  messagingSenderId: "556304158511",
  appId: "1:556304158511:web:334f76a9446ecbe219dbda",
  stripeApiKey: "pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ"
  };

    if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
    if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
    if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
    if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
    if (!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential: messagingSenderId");
    if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const db = firebase.firestore();

  export default firebase;
  export {db, storage, firebase};
