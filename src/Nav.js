import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/1_MontanaRep_PrimaryLogo_GreenLandscape.png';

export default function Nav({ handleLogout }) {
    const [showBanner, setShowBanner] = useState(true);

    const navStyle = {
        color: 'black'
    }
    return (
        <section className="hero">
            <div className="header">
                <nav>
                    <Link to='/'><img src={logo} alt="Go Play Logo" /></Link>

                    <ul className="nav-links">
                        <Link style={navStyle} to='/about'><li>Home</li></Link>
                        <Link style={navStyle} to='/store'><li>Store</li></Link>
                        {/* <Link style={navStyle} to='/payment'><li>Payment</li></Link> */}
                        {/* <Link style={navStyle} to='/privacy-policy'><li>Privacy Policy</li></Link> */}
                        
                        

                    </ul>

                    <div>
                        <Link to='/account'><FontAwesomeIcon icon={faUser} color="#CC8A05" size="lg" /></Link>
                    </div>

                </nav>

                {/* {showBanner ? (
                    <div className="banner">
                        <span></span><p><Link to='/store'>Get Go Play!</Link></p><span onClick={() => setShowBanner(false)}>&#x2716;</span>
                    </div>
                ) : (
                    <></>
                )} */}
            </div>
        </section>
    );
}