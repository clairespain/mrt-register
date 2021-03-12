import React from 'react';
import logo from './assets/1_MontanaRep_PrimaryLogo_GreenStacked.png';


const Home = ({ showPurchase }) => {
    return (
        <div className="home">
            <img src={logo} alt="Montana Repertory Theatre Logo Stacked" className="logo" />
            <br />
            <h1>Why <span>Premium?</span></h1>
            <br />
            <p>Get <strong>exclusive</strong> access to the Montana Repertory Theatre's premium content:&nbsp;
            <strong className="highlight link" onClick={() => showPurchase()}>Go Play!</strong>
                <br />
            &#8212; An interactive play experience from all accross your community!
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
            <button onClick={() => showPurchase()}>Go Premium</button>
            <br />
            <br />
        </div>
    );
};

export default Home;