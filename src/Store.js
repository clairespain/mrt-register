import React, {useEffect, use} from 'react';
import { Form, Button, Card, Alert, ListGroup, ListGroupItem, } from "react-bootstrap"
import { loadStripe } from '@stripe/stripe-js'
import Stripe from "stripe"
import GoPlayLogo from "./assets/goplay.png";
<<<<<<< HEAD
import firebase from './services/firebase'
// import function from '.'
 const stripe = Stripe("pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ");
=======
//import StripeCheckout from 'react-stripe-checkout'
import './App.css';
import PaymentTerminal from './PaymentTerminal'
import CheckoutForm from './CheckoutForm'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import TempCheckout from './TempCheckout';
import { Link, useHistory } from "react-router-dom"

// const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout');
//  const stripePromise = loadStripe('pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ');
>>>>>>> 1fab7694a9f8febc5f7b2ac665c469ce0a980dde

export default function Store() {
    const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Congrats on your empanadas!</div>;
  }

  const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout')

  const handleClick = async (event) => {
        createStripeCheckout()
            .then(response => {
                const sessionId = response.data.id
                stripe.redirectToCheckout({sessionID: sessionId})
            })
    }


    return (
        <div className="page-container">
            <br/>
            <br/>
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
                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm
                        success={() => {
                        setStatus("success");
                        }}
                    />
                    </Elements> */}
                
                <button role="link" onClick={handleClick}>
                    Checkout
                </button>

            </Card.Body>
            </Card>
          

        </div>
    );
};

