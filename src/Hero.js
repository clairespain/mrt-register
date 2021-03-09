import React from 'react';
import Home from './Home';
import Purchase from './Purchase';

const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <Home/>
            <br></br>
            <Purchase/>
        </section>
    );
};

export default Hero;