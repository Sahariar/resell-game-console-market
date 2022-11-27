import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// Left to do is JWT token, Payment gatway then deploy server then testing.
// Add product dashboard.
const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const { itemName, email, itemPrice, _id ,product_id } = booking;
    console.log(itemPrice);
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:4000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessUserToken')}`
            },
            body: JSON.stringify({ itemPrice }),
        }).then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
            .catch(err => console.log(err))
    }, [itemPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: itemName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                itemPrice,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
                itemName,
                product_id,
            }
            fetch('http://localhost:4000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessUserToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        const url = `http://localhost:4000/products/stock/${product_id}?value=false`
                        console.log(url);
                        axios.put(url)
                                .then(function (response) {
                                    console.log(response);
                                    if(response.data.acknowledged){
                                        console.log(response.data.acknowledged);
                                    }
                                })
                                .catch(function (error) {
                                    console.log(error);
                                    toast.error(error)
                            
                                });
                    }
                })
        }
        setProcessing(false);


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;