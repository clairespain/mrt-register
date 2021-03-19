import React, { useState, } from 'react';
import Home from './Home';
import Account from './Account';
import Purchase from './Purchase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, } from '@fortawesome/free-solid-svg-icons'
//replace with Go Play! logo when available
import logo from './assets/1_MontanaRep_PrimaryLogo_GreenLandscape.png';

const Hero = ({ handleLogout }) => {
    const [showBanner, setShowBanner] = useState(true);
    const [content, setContent] = useState('home');

    function showPurchase() {
        setShowBanner(false)
        setContent('purchase');
    }

    return (
        <section className="hero">
            <div className="header">
                <nav>
                    <img src={logo} alt="Go Play Logo" onClick={() => setContent("home")} />
                    <div>
                        <FontAwesomeIcon icon={faUser} color="#CC8A05" size="lg" onClick={() => setContent("account")} />
                    </div>

                </nav>
                {showBanner ? (
                    <div className="banner">
                        <span></span><p onClick={() => showPurchase()}>Get Go Play!</p><span onClick={() => setShowBanner(false)}>&#x2716;</span>
                    </div>
                ) : (
                    <></>
                )}
            </div>

            <div className="content">

                {(function () {
                    if (content === 'home') {
                        return <Home
                            showPurchase={showPurchase}
                        />
                    } else if (content === 'account') {
                        return <Account
                            handleLogout={handleLogout}
                            showPurchase={showPurchase}
                        />
                    } else if (content === 'purchase') {
                        return <Purchase />
                    }
                })()}

            </div>
        </section>
    );
};

export default Hero;