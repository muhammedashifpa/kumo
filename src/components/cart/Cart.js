import React,{createContext,useState} from 'react'
import ProductList from './cartcomponents/ProductList'
import BreadCrumb from './../randomomponents/BreadCrumb'
import Billing from './cartcomponents/Billing'
import CheckOutSideBar from './cartcomponents/CheckOutSideBar'



function Cart() {
    return (
        <div>
            <BreadCrumb />
            <section className="middle">
				<div className="container">
				
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="text-center d-block mb-5">
								<h2>Shopping Cart</h2>
							</div>
						</div>
					</div>
					
					<div className="row justify-content-between">
                            <ProductList  />       			
                            <Billing />
                            {/* <CheckOutSideBar/> */}
                        </div>
                    </div>
                </section> 
        </div>
    )
}

export default Cart
