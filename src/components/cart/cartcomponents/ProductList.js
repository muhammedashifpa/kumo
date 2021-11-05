import React from 'react'

function ProductList() {
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
								
								<li className="list-group-item">
									<div className="row align-items-center">
										<div className="col-3">
											{/* <!-- Image --> */}
											<a href="product.html"><img src="assets/img/product/7.jpg" alt="..." className="img-fluid"/></a>
										</div>
										<div className="col d-flex align-items-center justify-content-between">
											<div className="cart_single_caption pl-2">
												<h4 className="product_title fs-md ft-medium mb-1 lh-1">Girls Solid A-Line Dress</h4>
												<p className="mb-1 lh-1"><span className="text-dark">Size: 36</span></p>
												<p className="mb-3 lh-1"><span className="text-dark">Color: Red</span></p>
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
						
						<div className="col-12 col-md-12 col-lg-4">
							<div className="card mb-4 gray mfliud">
							  <div className="card-body">
								<ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
								  <li className="list-group-item d-flex text-dark fs-sm ft-regular">
									<span>Subtotal</span> <span className="ml-auto text-dark ft-medium">$98.12</span>
								  </li>
								  <li className="list-group-item d-flex text-dark fs-sm ft-regular">
									<span>Tax</span> <span className="ml-auto text-dark ft-medium">$10.10</span>
								  </li>
								  <li className="list-group-item d-flex text-dark fs-sm ft-regular">
									<span>Total</span> <span className="ml-auto text-dark ft-medium">$108.22</span>
								  </li>
								  <li className="list-group-item fs-sm text-center">
									Shipping cost calculated at Checkout *
								  </li>
								</ul>
							  </div>
							</div>
							
							<a className="btn btn-block btn-dark mb-3" href="checkout.html">Proceed to Checkout</a>
							
							<a className="btn-link text-dark ft-medium" href="shop.html">
							  <i className="ti-back-left mr-2"></i> Continue Shopping
							</a>
						</div>
						
					</div>
					
				</div>
			</section>
    )
}

export default ProductList
