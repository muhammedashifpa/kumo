import React from 'react'
import Billing from './Billing'
import {useSelector} from 'react-redux'


function ProductList() {
	const products = useSelector((state)=>state.cart)
	console.log(products,'The is porduct view')
	if (products.items.length === 0 || !products) {
		return(
			<section className="middle">
				<div className="container">
				<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="text-center d-block mb-5">
								<h2>Your Cart is empty</h2>
							</div>
							<div className="text-center d-block mb-5">
								<a class="btn stretched-link borders full-width" href="/category"><i class="fas fa-plus mr-2"></i>Explore</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}	
    return (
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
						<div className="col-12 col-lg-7 col-md-12">
							<ul className="list-group list-group-sm list-group-flush-y list-group-flush-x mb-4">
									
								<li className="list-group-item">
									<div className="row align-items-center">
										<div className="col-3">
											{/* <!-- Image --> */}
											<a href="product.html"><img src="assets/img/product/7-a.jpg" alt="..." className="img-fluid"/></a>
										</div>
										<div className="col d-flex align-items-center justify-content-between">
											<div className="cart_single_caption pl-2">
												<h4 className="product_title fs-md ft-medium mb-1 lh-1">Women Striped Shirt Dress</h4>
												<p className="mb-1 lh-1"><span className="text-dark">Size: 40</span></p>
												<p className="mb-3 lh-1"><span className="text-dark">Color: Blue</span></p>
												<h4 className="fs-md ft-medium mb-3 lh-1">$129</h4>
												<select className="mb-2 custom-select w-auto">
												  <option value="1" selected="">1</option>
												  <option value="2">2</option>
												  <option value="3">3</option>
												  <option value="4">4</option>
												  <option value="5">5</option>
												</select>
											</div>
											<div className="fls_last"><button className="close_slide gray"><i className="ti-close"></i></button></div>
										</div>
									</div>
								</li>
								
							</ul>
							
							<div className="row align-items-end justify-content-between mb-10 mb-md-0">
								<div className="col-12 col-md-7">
									{/* <!-- Coupon --> */}
									<form className="mb-7 mb-md-0">
										<label className="fs-sm ft-medium text-dark">Coupon code:</label>
										<div className="row form-row">
											<div className="col">
											  <input className="form-control" type="text" placeholder="Enter coupon code*" />
											</div>
											<div className="col-auto">
												<button className="btn btn-dark" type="submit">Apply</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-12 col-md-auto mfliud">
									<button className="btn stretched-link borders">Update Cart</button>
								</div>
							</div>
						</div>
						
					<Billing />
						
					</div>
					
				</div>
			</section>
    )
}

export default ProductList
