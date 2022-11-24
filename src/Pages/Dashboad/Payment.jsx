import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePk = import.meta.env.VITE_STRIPE_PK;
const stripePromise = loadStripe(`${stripePk}`);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { itemName, email, itemPrice, _id } = booking;
   console.log(booking);
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h3 className="text-3xl">Payment for {}</h3>
            <p className="text-xl">Please pay <strong></strong> for your appointment on </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                      booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;