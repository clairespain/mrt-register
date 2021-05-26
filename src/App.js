import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { AuthProvider} from './services/AuthContext';
import PrivateRoute from "./services/PrivateRoute"
import fire from './services/firebase';
import { db, firebase } from './services/firebase';
import Login from './Login';
import Hero from './Hero';
import Home from './Home';
import './App.css';
import Nav from './Nav';
import About from './About';
import Store from './Store';
import PrivacyPolicy from './PrivacyPolicy';
import Account from './Account';
import Terms from './Terms';


import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

import Signup from "./Login"




const App = () => {
  // const [username, setUsername] = useState('');
  // const [user, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [hasAccount, setHasAccount] = useState(false);
  // const [subscribed, setSubscribed] = useState('');
  // const [birthdate, setBirthdate] = useState('');
 
  return (
    <div>
    <Router>
      <AuthProvider>
     <div className='App'>
        
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home}/>
            <Route path="/terms-and-conditions" component={Terms} />
            <Route path="/forgot-password" componenet={ForgotPassword} />
        </Switch>
      </div>    
      </AuthProvider>
    </Router>
    </div>  
  )
}

export default App;