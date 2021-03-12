import React, { useState, } from 'react';
const name = 'Name';
const email = "Email";
const accountType = "Basic";

const Account = ({ handleLogout, showPurchase }) => {
    //dummy premium const
    const [isPremium, setIsPremium] = useState(false);
    return(
        <div className="account">
            <h1>Hi, {name}!</h1>
            <br />
            <p><span className="bold">Email:</span> &nbsp; {email}</p>
            <p><span className="bold">Account Type:</span> &nbsp; {accountType} {!isPremium ? (<span className="highlight link" onClick={() => showPurchase()}>&nbsp; Upgrade</span>) : (<span className="highlight">&#9733;</span>)}</p> 
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Account;