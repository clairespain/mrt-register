import React                           from 'react';
import { Elements, StripeProvider }    from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
// import { stripeApiKey }                      from './Stripe';

const stripeApiKey = 'pk_test_51IguSVBv0UdVykD4wPT7mpfU5oiK0rfvDGKB58eSlTfCqxo1ouczdqa7Oe9Fea7yodpPoFyKTPfGKgoTAvoNh4KN00UNeva6wQ';

const PaymentTerminal = () => {
    
    return  (
        <div className = 'Modal'>
            <Elements>
            <StripeProvider apiKey = {stripeApiKey}>
                
                    <CheckoutForm/>
                
            </StripeProvider>
            </Elements>
        </div>
    );
    
}

export default PaymentTerminal;
