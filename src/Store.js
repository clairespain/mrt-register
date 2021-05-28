import React from 'react';
import { Form, Button, Card, Alert, ListGroup, ListGroupItem, } from "react-bootstrap"
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe} from '@stripe/stripe-js'
import firebase from './services/firebase'
import {stripe} from "stripe"
import GoPlayLogo from "./assets/goplay.png";
import StripeCheckout from 'react-stripe-checkout'
import './App.css';
import PaymentTerminal from './PaymentTerminal'
import CheckoutForm from './CheckoutForm'

const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout');
 const stripePromise = loadStripe('pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ');

export default function Store() {

    function handleToken(token, addresses) {
        console.log({ token, addresses})

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

                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    amount={15 * 100}/>
                </Elements>

            </Card.Body>
            </Card>
            <br/>
            <br/>
        </div>
    );
}

