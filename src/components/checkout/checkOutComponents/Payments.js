import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axiosInstance from '../../../axios'


const stripePromise = loadStripe("pk_test_51KDMRRSJ2WdoqlsxsURu8bKZm80XLdDKHLvo2Ygu3RexA7WU3TxmgwRXpG7duwYqUhq78RDGQJcEWKN7QwtzaOE000N76OaAxr");


function Payments() {
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      axiosInstance.post('payment/',{ items: [{ id: "xl-tshirt" }] })
            .then((res) =>{
                setClientSecret(res.data.clientSecret);
            })
            .catch((err) =>{
                console.log(err);
            })
    }, []);
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };
    return (
        <div className="row mb-4">
					<div className="col-12 col-lg-12 col-xl-12 col-md-12">
						<div className="panel-group pay_opy980" id="payaccordion">
							{/* <!-- Pay By Strip --> */}
							 <div className="panel panel-default border">
								<div className="panel-heading" id="stripes">
                                <div className="panel-body">
                                    <div className="row">
                                    <div className="col-lg-12 col-md-6 col-sm-12">
									
                                {clientSecret && (
                                    <Elements options={options} stripe={stripePromise}>
                                        <CheckoutForm />
                                    </Elements>
                                )}
								</div>
								</div>
								</div>
								</div>
								
							</div> 
						</div>
					</div>
				</div>
    )
}

export default Payments
