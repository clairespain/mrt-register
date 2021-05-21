import React from 'react';
import goPlayLogo from './assets/GoPlay_LogoGreen-03.png'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ");


export default function Purchase() {
    return (
        <div className="purchase">
            <img src={goPlayLogo} alt="Montana Repertory Theatre Logo Stacked" className="goPlay" />

            <h1>Get <span className="hightlight">Go Play!</span></h1>
            <br />
            {/* <p>Space for pricing + instructions and stuff</p> */}
            <br />
            <div className="App" style={{width: "100%"}}>
                <Elements stripe={promise} >
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};
