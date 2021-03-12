import React from 'react';
import './App.css';

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <h1>Sign In</h1>
                            <p>New User? <span onClick={() => setHasAccount(!hasAccount)}>Create an Account</span></p>
                        </>
                    ) : (
                        <>
                            <h1>Sign Up</h1>
                            <p>Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>
                <br />
                {/* <label>Email</label> */}
                <input type="text" placeholder="Email" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <br />
                {/* <label>Password</label> */}
                <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <br />
                <br />
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