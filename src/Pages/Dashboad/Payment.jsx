import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import { toast } from 'react-toastify';

const stripePk = import.meta.env.VITE_STRIPE_KEY;
const stripePromise = loadStripe(`${stripePk}`);

const Payment = () => {
    const booking = useLoaderData();
    console.log(import.meta.env.VITE_IMGBB_KEY);
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    

    return (
        <section className='payment-area'>
            <div className="container mx-auto py-10">
            <h3 className="text-3xl text-center">Payment</h3>        

<p className="text-xl text-center my-8">Please pay <strong> ${booking.itemPrice}</strong> for your  {booking.itemName}</p>
<div className="item-details flex flex-col xl:flex-row p-10 justify-center items-start">
<div className="item-all-details bg-neutral shadow-md card xl:w-4/12 p-10 xl:mx-5 text-white space-y-4">
    <h3 className="item">
        <div className="item-name">
        Item Name:    <span className='text-xl mx-4'>{booking.itemName}</span> 
        </div>
    </h3>
    <div className="item-price">
    Email:      <span className='text-2xl mx-4'>  {booking.email}</span> 
        </div>
    <div className="item-price">
   Price:    <span className='text-2xl mx-4'>  $ {booking.itemPrice}</span> 
        </div>
    <div className="item-contact">
    Contact No:    <span className='text-2xl mx-4'>  {booking.contactNo}</span> 
    </div>
    
    <div className="item-book flex items-center">
       Meeting Location:    <span className='text-2xl mx-4'> {booking.location}</span> 
    </div>
    

</div>
<div className=' bg-white shadow-md card xl:w-5/12 w-full xl:mx-5 p-10 text-white space-y-4 my-10'>
    <Elements stripe={stripePromise}>
        <CheckoutForm
          booking={booking}
        />
    </Elements>
</div>

</div>

            </div>
            
        </section>
    );
};

export default Payment;