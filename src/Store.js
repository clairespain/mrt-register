import React, {useEffect, use} from 'react';
import { Form, Button, Card, Alert, ListGroup, ListGroupItem, } from "react-bootstrap"
import { loadStripe } from '@stripe/stripe-js'
import Stripe from "stripe"
import GoPlayLogo from "./assets/goplay.png";
import firebase from './services/firebase'
import { Link, useHistory } from "react-router-dom";
// import function from '.'
 //const stripe = Stripe("pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ");
 const checkoutButton = document.getElementById('checkout-button')
 const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout')
 const stripe = Stripe('pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ')


 function handleCheckout() {
    createStripeCheckout()
    // .then(response => {
    //   const sessionId = response.data.id
    //   stripe.redirectToCheckout({ sessionId: sessionId })
    // })
 }

export default function Store() {

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
                <Link to='./payment'><button>Checkout</button></Link>
                 
               

            </Card.Body>
            </Card>
          

        </div>
    );
};

