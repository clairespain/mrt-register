import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from "./services/AuthContext";
import { db } from "./services/firebase";
import { Link, useHistory } from "react-router-dom";



const Account = ({ handleLogout }) => {
    const { user, logout } = useAuth();
    const [userData, setUserData] = useState(null);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);
    const [isPremium, setIsPremium] = useState(false);

    const [error, setError] = useState("");
    const history = useHistory();

    useEffect(() => {
        db.collection("users").where('email', '==', user.email).onSnapshot((snapshot) => {
            if (snapshot == null) {
                return null;
            } else {
                setUserData(snapshot.docs.map((doc) => ({ id: doc.id, user: doc.data() })));
            }
        })

    }, []);

    // useEffect(() => {
    //    if(userData !== null && userData !== undefined && userData[0].user.name !== undefined){
    //        setName(userData[0].user.name);
    //        setEmail(user.email);
    //        setCreatedAt(userData[0].user.createdAt.toDate());
    //        setIsPremium(userData[0].user.isPremium)
    //        console.log(isPremium)
    //    }

    // }, [userData]);

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    function timeSince(time) {
        if (time !== null) {
            switch (typeof time) {
                case 'number':
                    break;
                case 'string':
                    time = +new Date(time);
                    break;
                case 'object':
                    if (time.constructor === Date) time = time.getTime();
                    break;
                default:
                    time = +new Date();
            }
            var time_formats = [
                [60, 'seconds', 1], // 60
                [120, '1 minute ago', '1 minute from now'], // 60*2
                [3600, 'minutes', 60], // 60*60, 60
                [7200, '1 hour ago', '1 hour from now'], // 60*60*2
                [86400, 'hours', 3600], // 60*60*24, 60*60
                [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
                [604800, 'days', 86400], // 60*60*24*7, 60*60*24
                [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
                [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
                [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
                [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
                [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
                [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
                [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
                [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
            ];
            var seconds = (+new Date() - time) / 1000,
                token = 'ago',
                list_choice = 1;

            if (seconds === 0) {
                return 'Just now'
            }
            if (seconds < 0) {
                seconds = Math.abs(seconds);
                token = 'from now';
                list_choice = 2;
            }
            var i = 0,
                format;
            while (format = time_formats[i++])
                if (seconds < format[0]) {
                    if (typeof format[2] == 'string')
                        return format[list_choice];
                    else
                        return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
                }
            return time;
        }
    }

    return (
        <div className="account">
            <br /><br />
            <h1>Hi, {name}!</h1>
            <br />
            <p><span className="bold">Email:</span> &nbsp; {email}</p>
            <p><span className="bold">Membership:</span> &nbsp; {!isPremium ? (<span>Basic <Link to='/store'><span className="highlight link">&nbsp;Upgrade</span></Link></span>) : (<span>Premium <span className="highlight">&#9733;</span></span>)}</p>
            <p><span className="bold">Account Created:</span> &nbsp; {timeSince(createdAt)}</p>
            <br />
            <button onClick={handleLogout}>Logout</button>
            <br />
        </div>
    );
};

export default Account;