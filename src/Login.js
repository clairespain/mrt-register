import React, {useState} from 'react';
import './App.css';

const Login = (props) => {

    const {
        username, 
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        subscribed = true,
        setSubscribed,
    } = props;


    const [firstSubscribed, setFirstSubscribed] = useState(true);
    const handleChecked = ({target}) => {
        setSubscribed(target.checked);
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
                            <br></br>
                            <input className="textInput" type="text" placeholder="Email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                            <p className="errorMsg">{emailError}</p>
                            <input className="textInput" type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                            <p className="errorMsg">{passwordError}</p>
                        </>
                    ) : (
                        <>
                            <h1>Sign Up</h1>
                            <p>Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            <br></br>
                            <br></br>
                            <input className="textInput" type="text" placeholder="Name" autoFocus required value={username} onChange={e => setUsername(e.target.value)} />
                            <br></br>
                            <input className="textInput" type="text" placeholder="Email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                             <p className="errorMsg">{emailError}</p>
                            <input className="textInput" type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                            <p className="errorMsg">{passwordError}</p>
                            
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
                                    <input defaultChecked value={subscribed} type="checkbox" onChange={handleChecked} />
                                <div class="control_indicator"></div>
                            </label>
                            </div>
                                <p>By signing up you are over the age of 13 and agree to our
                                    <span>Terms & Conditions</span></p>                 
                        </>
                    )}
                </div>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign up</button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
};
export default Login;