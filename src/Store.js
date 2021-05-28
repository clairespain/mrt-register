import React, {useEffect, use} from 'react';
import { Form, Button, Card, Alert, ListGroup, ListGroupItem, } from "react-bootstrap"
import {Elements} from '@stripe/react-stripe-js'
import elements from 'react-stripe-elements'
import { loadStripe} from '@stripe/stripe-js'
import firebase from './services/firebase'
import Stripe from "stripe"
import GoPlayLogo from "./assets/goplay.png";
import StripeCheckout from 'react-stripe-checkout'
import './App.css';
import PaymentTerminal from './PaymentTerminal'
import CheckoutForm from './CheckoutForm'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

// const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout');
//  const stripePromise = loadStripe('pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ');

 const STRIPE_PUBLIC_KEY = 'pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ'; // TODO: PUT YOUR STRIPE PUBLISHABLE KEY HERE

 const FIREBASE_FUNCTION = 'https://us-central1-montana-rep-app.cloudfunctions.net/charge'; // TODO: PUT YOUR FIREBASE FUNCTIONS URL HERE



export default function Store() {

        const charge_amount = 500;
        const charge_currency = 'usd';


    async function charge(token, amount, currency) {
        const res = await fetch(FIREBASE_FUNCTION, {
            method: 'POST',
            body: JSON.stringify({
                token,
                charge: {
                    amount,
                    currency,
                },
            }),
        });
        const data = await res.json();
        data.body = JSON.parse(data.body);
        return data;
    }

    return (
        <div className="page-container">
            <h1>Store</h1>
            <br/>
            <br/>
            <Card style={{ maxWidth: '25rem', minWidth: '15rem' }}>
            <Card.Img style={{ maxWidth: '25rem', minWidth: '15rem'}} variant="top" alt="GoPlay Logo" src={GoPlayLogo} />
            <Card.Body>
                <Card.Title><h2>Phantom Bride</h2></Card.Title>
                <Card.Text>
                For more information on the play and the creative team, visit <a href="https://montanarep.com/goplay">MontanaRep.com/goplay</a>.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>$15.00</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <br/>
                {/* <Button onClick={() => console.log("click") 

                    createStripeCheckout()
                        .then(response => {
                            const sessionId=response.data.id
                            stripe.redirectToCheckout({ sessionsId: sessionId})
                }>Buy Content</Button> */}
                {/* <StripeCheckout
                    stripeKey="pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ"
                    token={handleToken}
                    amount={15 * 100}
                    name={"Phantom Bride"}
                /> */}

                {/* <PaymentTerminal/> */}
                {/* <Elements>
                <CheckoutForm 
                    amount={15 * 100}/>
                </Elements> */}
                
                <Button onClick={charge}>Do Something</Button>

            </Card.Body>
            </Card>
          

        </div>
    );
}

