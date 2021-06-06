import React, {useContext, useState, useEffect} from 'react';
import { auth, db, firebase } from "./firebase";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [username, setUsername] = useState('');
    const [user, setUser] = useState();
    // const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading]=useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [subscribed, setSubscribed] = useState('');
    // const [birthdate, setBirthdate] = useState('');


    
    // const clearInputs = () => {
    //     setEmail('');
    //     setPassword('');
    //   }
    //   const clearErrors = () => {
    //     setEmailError('');
    //     setPasswordError('');
    //   }

    
      async function signup(email, password, username, subscribed) {
        try{
          await auth.createUserWithEmailAndPassword(email, password).then(cred => {
        db.collection("users").doc(cred.user.uid).set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          name: username,
          email: email,
          isAdmin: false,
          isPremium: false,
          isSubscribed: subscribed,
          isSponsorBasic: false,
          isSponsorPremium: false,
        })
        });
        } catch (e) {
          console.log(e);
          // setErrorObject(e);
        }
        
      }
    
    
      function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    
      function logout() {
        return auth.signOut()
      }
    
    
      //console.log(user);
        
    //     db.collection("users").add({
    //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //       name: username,
    //       email: email,
    //       isAdmin: false,
    //       isPremium: false,
    //       isSubscribed: subscribed,
    //       isSponsorBasic: false,
    //       isSponsorPremium: false,
    //     });
    //   };
 
      function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
      }
    
      function updateEmail(email) {
        return user.updateEmail(email)
      }
    
      function updatePassword(password) {
        return user.updatePassword(password)
      }
    
    // useEffect(()=>{
    //   const currentUser = auth.onAuthStateChanged((user)=>{
    //     setUser(user)
    //   })
    // }, [])

      // React Hook useEffect has missing dependency is a warning error >>
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
            });
            return unsubscribe

      }, []);




      const value = {
          user,
          login, 
          signup, 
          logout,
          resetPassword,
          updateEmail,
          updatePassword
      }

      return (
          <AuthContext.Provider value={value}>
              {!loading && children}
          </AuthContext.Provider>
      )
}