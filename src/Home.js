import React, {useState} from 'react';
import logo from './assets/1_MontanaRep_PrimaryLogo_GreenStacked.png';
import goPlayLogo from './assets/GoPlay_LogoGreen-03.png'

// import Store from './Store';
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "./services/AuthContext"
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Store from './Store';
import PrivacyPolicy from './PrivacyPolicy';
import Account from './Account';
import Login from './Login';
import Support from './Support';
import TempCheckout from './TempCheckout';

export default function Home() {
    const [error, setError] = useState("")
    const { user, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
  
    return (
       
        <div>
            <Router>
             
             <div>   
             <Switch>
               
                <Route path="/store" component={Store}><Store /></Route>
                <Route path="/privacy-policy" component={PrivacyPolicy}><PrivacyPolicy /></Route>
                <Route path="/account" component={Account}><Account/></Route>
                <Route path="/about" component={About}><About /></Route>
                <Route path="/login" component={Login}><Login/></Route>
                <Route path="/support" component={Support}><Support /></Route>
                <Route path='/checkout' component={TempCheckout}><TempCheckout/></Route>
                <Route path="/"><About/></Route>
            </Switch>
            
            </div>
            </Router>
        </div>
    );
};
