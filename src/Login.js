import React, {useRef, useState} from 'react';
import './App.css';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from './services/AuthContext';
import {Link, useHistory} from 'react-router-dom';

export default function Login() {

    const nameRef = useRef()
    const newsSubscriberRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [hasAccount, setHasAccount] = useState(true)

    const [username, setUsername] = useState('');
    const [user, setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [subscribed, setSubscribed] = useState(true);

    async function handleSignup(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value, newsSubscriberRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

      async function handleLogin(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }
    

   
    return (
        <section className="login">
            <div className="loginContainer">
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <h1>Sign In</h1>
                            <p>New User? <span onClick={() => setHasAccount(!hasAccount)}>Create an Account</span></p>
                            <br></br>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <br></br>
                            <input className="textInput" type="text" placeholder="Email" autoFocus required ref={emailRef} />
                            {/* <p className="errorMsg">{emailError}</p> */}
                            <input className="textInput" type="password" placeholder="Password" required ref={passwordRef} />
                            {/* <p className="errorMsg">{passwordError}</p> */}
                        </>
                    ) : (
                        <>
                            <h1>Sign Up</h1>
                            <p>Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <br></br>
                            <input className="textInput" type="text" placeholder="Name" autoFocus required ref={nameRef}  onChangeText={username => setUsername(username)} />
                            <br></br>
                            <input className="textInput" type="text" placeholder="Email" autoFocus required ref={emailRef} onChangeText={userEmail => setEmail(userEmail)} />
                             {/* <p className="errorMsg">{emailError}</p> */}
                            <input className="textInput" type="password" placeholder="Password" required ref={passwordRef} onChangeText={userPassword => setPassword(userPassword)}/>
                            {/* <p className="errorMsg">{passwordError}</p> */}
                            <input className="textInput" type="password" placeholder="Confirm Password" required ref={passwordConfirmRef} onChangeText={confirmUserPassword => setConfirmPassword(confirmUserPassword)} />
                            
                            {/* <p styles={{float: "left"}}>Please Enter Your Birthday</p>
                                <div className="birthday_div">
                                <input className="birthday_inputs_left" value={day} onChange={e => setDay(e.target.value)} type="number" placeholder="DD"/>
                                <input className="birthday_inputs_left" value={month} onChange={e => setMonth(e.tartget.value)} type="number" placeholder="MM"/>
                                <input className="birthday_inputs_right" value={year} onChange={e => setYear(e.target.value)} type="number" placeholder="YYYY"/>
                                </div>
                            <br></br> */}
                            
                            <div class="control-group">
                            <label class="control control-checkbox">
                                  Subscribe to our Newsletter
                                    <input defaultChecked value={subscribed} ref={newsSubscriberRef}  type="checkbox" onChange={(e) => setSubscribed(!subscribed)} />
                                <div class="control_indicator"></div>
                            </label>
                            </div>
                                <p>By signing up you agree that you are over the age of 13 and agree to our
                                    <span>Terms & Conditions</span></p>                 
                        </>
                    )}

                </div>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button disabled={loading} onClick={handleLogin}>Sign In</button>
                        </>
                    ) : (
                        <>
                            <button disabeld={loading} onClick={handleSignup}>Sign up</button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
};
