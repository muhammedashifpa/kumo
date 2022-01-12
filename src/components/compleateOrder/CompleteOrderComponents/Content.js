import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'


function Content() {

    return (
        <section className="middle">
				<div className="container">
				
					<div className="row justify-content-center">
						<div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
							
							<div>
							<div className="p-4 d-inline-flex align-items-center justify-content-center circle bg-light-success text-success mx-auto mb-4"><i className="lni lni-heart-filled fs-lg"></i></div>
						
							<h2 className="mb-2 ft-bold">Your Order is Completed!</h2>
							
							<p className="ft-regular fs-md mb-5">Your order has been completed. Your order details are shown for your personal account.</p>
							
							<Link to="/my-account/my-order" className="btn btn-dark" href="#!">Track Your Orders</Link>
							</div>

							
						</div>
					</div>
					
				</div>
			</section>
    )
}

export default Content
