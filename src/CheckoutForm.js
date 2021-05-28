import React, { useEffect, useState } from 'react';
import {CardElement, injectStripe}     from 'react-stripe-elements';
// import firebase, { environment }       from '../Functions/Firebase';
import { firebase } from './services/firebase';

const stripeApiKey = 'pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ';

const CheckoutForm = ({stripe}) => {
    
    const [customer, setCustomer]  = useState(null);
    const [payment, setPayment]    = useState(false);
    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Reading customer's info from Firebase
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    useEffect( () => {
        
        firebase.database().ref('users').on('value', snapshot => {
            
            if(snapshot.val()){
                
                setCustomer(snapshot.val());
                
            }
            
        });
        
    }, []);
    
    const submit = async (ev) => {
    
        let fetchURL = 'firebase_function_changePremium_URL';
        
        let {token}  = await stripe.createToken({email: customer.email});
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Sends token to Firebase server
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        let response = await fetch(fetchURL, {
            
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                stripeApiKey: stripeApiKey,
                stripeToken: token.id, 
            })
            
        });
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Writes in the database that the customer is a new member
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        if(response.ok) {
            
            firebase.database().ref('users/CDPSgwPobxH4sNd1NbWA/isPremium').transaction(value => true);
            
            setPayment('success');
            
        }
    }
    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Displays form to fill in with card details
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return (
      <div className = 'Checkout'>
        { payment !== 'success'
        ? <div className = 'Modal-Wrap'>
                <h2>Welcome to GoPlay!</h2>
                <p>You'll get charged 50 $ per month and you'll be a member.</p>
                <CardElement hidePostalCode = {true}/>
                <div className = 'Total'>
                    {/* <button onClick = {hide}>Cancel</button> */}
                    <button onClick = {submit}>Pay</button>   
                </div>
          </div>
        : <div className = 'Modal-Wrap Succeed'>
                <h2>Thanks!</h2>
                <p>Payment succesfully done!</p>
          </div> 
        }
      </div>
    );
    
}

export default injectStripe(CheckoutForm);