import React from 'react'
import CheckoutDetails from './checkOutComponents/CheckoutDetails'
import CheckOutSideBar from './checkOutComponents/CheckOutSideBar'

function Checkout() {
    return (
        <section className="middle">
				<div className="container">
				
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="text-center d-block mb-5">
								<h2>Checkout</h2>
							</div>
						</div>
					</div>
					<div className="row justify-content-between">

                    <CheckoutDetails />
                    <CheckOutSideBar/>
					</div>

                </div>
        </section>
    )
}

export default Checkout
