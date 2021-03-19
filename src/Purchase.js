import React from 'react';
import goPlayLogo from './assets/GoPlay_LogoGreen-03.png'

const Purchase = () => {
    return (
        <div className="purchase">
            <img src={goPlayLogo} alt="Montana Repertory Theatre Logo Stacked" className="goPlay" />

            <h1>Get <span className="hightlight">Go Play!</span></h1>
            <br />
            <p>Space for pricing + instructions and stuff</p>
        </div>
    );
};

export default Purchase;