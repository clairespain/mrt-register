import React, {useState, useEffect} from 'react';
import { CountryDropdown} from 'react-country-region-selector';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { apiInstance } from './../Utils';
import {useAuth} from './../services/AuthContext';
import { db } from "./../services/firebase";
import { Link, useHistory } from "react-router-dom";
// import {useDispatch} from 'react-redux';
import './styles.css'





const initialAddressState = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
}


const PaymentDetails = ({}) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    // const dispatch = useDispatch();
    const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
    const [nameOnCard, setNameOnCard] = useState('');
    const [userData, setUserData] = useState(null);
    const [email, setEmail] = useState(null);
    const [userId, setUserId] = useState();
    const history = useHistory();
    let userEmail = user.email;


    //  function getId () {
    //      db.collection("users").where('email', '==', user.email).get().then((doc) => {
    //         console.log("<----------User Data --------->")
    //         console.log(doc.id) 
    //     });
    // }

    console.log(user.uid);

    useEffect(() => {
    db.collection("users").doc(user.uid).onSnapshot((doc)=>{
        setUserData({id:doc.id, user:doc.data()});
        // console.log(users);
    })
}, [])
    
console.log(userData)

    const updatePremium = () => {
        db.collection("users").doc(user.uid).update({
            isPremium: true,
        }).then(()=> {
            // console.log("Change Premium Success");
        })
        
    }

    
    const handleBilling = e => {
         const { name, value} = e.target;
         setBillingAddress({
             ...billingAddress, 
             [name]: value
         });
    }

    const handleFormSubmit = async evt => {
        evt.preventDefault();
        const cardElement = elements.getElement('card');

        if(
            !billingAddress.line1 || !billingAddress.city ||
            !billingAddress.state || !billingAddress.postal_code ||
            !billingAddress.country || !nameOnCard
        ) {
            return;
        }

        apiInstance.post('/payments/create', {
            amount: 15 * 100,
            name: nameOnCard
        }).then(({ data: clientSecret}) => {

            stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: nameOnCard, 
                    address: {
                        ...billingAddress
                    }
                }
            }).then(({ paymentMethod }) =>{
                stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethod.id
                })
                .then(({ paymentIntent }) => {     
                    updatePremium();
                    history.push("/account")       
                });

                
            
            })
        });
        
        
    };

    const configCardElement = {
        iconStyle: 'solid',
        style: {
            base: {
                fontSize: '16px'
            }
        },
        hidePostalCode: true
    };

    return(
        <div className="paymentDetails">
            <form onSubmit={handleFormSubmit}>
                <div className="group">
                    <h2>
                        Billing Address
                    </h2>
                    <input class="form-control form-control-sm m-1" type="text" placeholder="Name on Card" value={nameOnCard} onChange={e => setNameOnCard(e.target.value)} name="nameOnCard" required aria-label=".form-control-sm example"></input>
                    <input class="form-control form-control-sm m-1" type="text" placeholder="Line 1" value={billingAddress.line1} onChange={e => handleBilling(e)} name="line1" required aria-label=".form-control-sm example"></input>
                    <input class="form-control form-control-sm m-1" type="text" placeholder="Line 2" value={billingAddress.line2} onChange={e => handleBilling(e)} name="line2" aria-label=".form-control-sm example"></input>
                    <input class="form-control form-control-sm m-1" type="text" placeholder="City" value={billingAddress.city} onChange={e => handleBilling(e)} name="city" required aria-label=".form-control-sm example"></input>
                    <input class="form-control form-control-sm m-1" type="text" placeholder="State" value={billingAddress.state} onChange={e => handleBilling(e)} name="state" required aria-label=".form-control-sm example"></input>
                    <input class="form-control form-control-sm m-1" type="text" placeholder="Postal Code" value={billingAddress.postal_code} onChange={e => handleBilling(e)} name="postal_code" required aria-label=".form-control-sm example"></input>
                    <div>
                        <CountryDropdown 
                        required
                        class="form-control form-control-sm m-1"
                        valueType="short"
                        onChange={val => handleBilling({
                            target: {
                                name: 'country',
                                value: val
                            }
                        })}
                        name="country"
                        value={billingAddress.country}
                    /></div>
                </div>
                <div className="group">
                    <h2>
                        Card Details
                    </h2>
                    <CardElement
                        options={configCardElement}
                    />
                </div>

                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
}

export default PaymentDetails;