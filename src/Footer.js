import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Footer() {

    const navStyle = {
        color: 'white',
    }
    return (
        <section className="footer">
            <div>
                <nav className="footer">

                    <ul className="nav-links">
                        <Link style={navStyle} to='/account'><li>Account</li></Link>
                        {/* <Link style={navStyle} to='/store'><li>Store</li></Link> */}
                        <Link style={navStyle} to='/privacy-policy'><li>Privacy Policy</li></Link>
                        <Link style={navStyle} to='/terms-and-conditions'><li>Terms and Conditions </li></Link>

                    </ul>


                </nav>
            </div>

        </section>
    );
}