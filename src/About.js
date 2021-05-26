import React, {useState} from 'react';
import logo from './assets/1_MontanaRep_PrimaryLogo_GreenStacked.png';
import goPlayLogo from './assets/GoPlay_LogoGreen-03.png'

// import Store from './Store';
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "./services/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function About() {
    return (
        <div>
            <div className="home">
            <p>{process.env.REACT_APP_AUTH_DOMAIN}</p>
            <img src={logo} alt="Montana Repertory Theatre Logo Stacked" className="logo" />
            <br />
            <h1>Why <span>Premium?</span></h1>
            <br />
            <p>Get <strong>exclusive</strong> access to the Montana Repertory Theatre's premium content:&nbsp;
            <Link  to="/store"><strong className="highlight link">Go Play!</strong></Link>
                <br />
            &#8212; An interactive play experience from all accross your community!
           <Link to="/store"><img src={goPlayLogo} alt="Go Play Logo" className="goPlay" /></Link> 
            <br />
            Explore the town and take Montana Rep with you.
            Just like geocaching, find local plays and experience them on-site!
            Enjoy titles specially produced for each location, and get completely immersed in the area.
            </p>
            <br />
            <br />
            <h2><span className="highlight">Premium</span> Features</h2>
            <br />
            <p>
                <span className="highlight">&#9733;</span> Go Play! Community Map
                <br />
                <span className="highlight">&#9733;</span> Exclusive Audio and Video*
                <br />
                <span className="highlight">&#9733;</span> An Extended Reality Experience
            </p>
            <br />
            <br />
            <table cellSpacing='0'>
                <tr>
                    <th></th>
                    <th>Basic</th>
                    <th className="highlight">Premium</th>
                </tr>
                <tr>
                    <td>Montana Rep App</td>
                    <td><span>&#x2714;</span></td>
                    <td><span>&#x2714;</span></td>
                </tr>
                <tr>
                    <td>Montana Rep News</td>
                    <td><span>&#x2714;</span></td>
                    <td><span>&#x2714;</span></td>
                </tr>
                <tr>
                    <td>Go Play! News</td>
                    <td><span>&#x2714;</span></td>
                    <td><span>&#x2714;</span></td>
                </tr>
                <tr>
                    <td>Art Community News</td>
                    <td><span>&#x2714;</span></td>
                    <td><span>&#x2714;</span></td>
                </tr>
                <tr>
                    <td>Community Event Schedule</td>
                    <td><span>&#x2714;</span></td>
                    <td><span>&#x2714;</span></td>
                </tr>
                <tr>
                    <td>Community Map</td>
                    <td></td>
                    <td><span className="highlight">&#x2714;</span></td>
                </tr>
                <tr>
                    <td>Audio Content</td>
                    <td></td>
                    <td><span className="highlight">&#x2714;</span></td>
                </tr>
                <tr>
                    <td>Video Content</td>
                    <td></td>
                    <td><span className="highlight">&#x2714;</span></td>
                </tr>
            </table>
            <br />
            <br />
            {/* <button onClick={() => showPurchase()}>Go Premium</button> */}
            {/* <button onClick={() => Store()}>Go Premium</button> */}
            <br />
            <button className="alt">Back to the App</button>
            <br />
            <br />
        </div>
        </div>
    );
}

