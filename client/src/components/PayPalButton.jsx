import React, { useEffect, useState} from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';

export default function PayPalButton({total, onPaymentSuccess, onPaymentError, disabled}) {
    const[paypalClient, setPayPalClient] = useState(null);

    useEffect(()=>{
        const paypalKey = async()=>{
            const {data: clientId} = await axios.get('http://localhost:3001/api/config/paypal');
            setPayPalClient(clientId);
        }
        paypalKey();
    },[paypalClient])
    return (
        !paypalClient ? (
        <Stack direcion='row' spacing={4} alignSelf='center'>
            <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl' />
        </Stack>
        ) : 
        <PayPalScriptProvider options={{ clientId: paypalClient }}>
            <PayPalButtons
            disabled={disabled}
            forceReRender={[total(), paypalClient]}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total(),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                       onPaymentSuccess(data);
                    });
                }}
                onError={(err) => {
                  onPaymentError();
                }}
            />
        </PayPalScriptProvider>
    );
}