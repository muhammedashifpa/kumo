import React,{useState} from 'react'
import Address from './Address'
import Payments from './Payments'

function CheckoutDetails() {

    return (			
		<div className="col-12 col-lg-7 col-md-12">
				<h5 className="mb-4 ft-medium">Shipping Address</h5>
				<Address/>
				{/* <h5 className="mb-4 ft-medium">Payments</h5>
				<Payments/> */}
		</div>
	
						
    )
}

export default CheckoutDetails
