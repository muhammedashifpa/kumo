import React from 'react'

function CheckoutDetails() {
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
						<div className="col-12 col-lg-7 col-md-12">
							<form>
								<h5 className="mb-4 ft-medium">Billing Details</h5>
								<div className="row mb-2">
									
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">First Name *</label>
											<input type="text" className="form-control" placeholder="First Name"/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Last Name *</label>
											<input type="text" className="form-control" placeholder="Last Name"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Email *</label>
											<input type="email" className="form-control" placeholder="Email" />
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Company</label>
											<input type="text" className="form-control" placeholder="Company Name (optional)" />
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Address 1 *</label>
											<input type="text" className="form-control" placeholder="Address 1" />
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Address 2</label>
											<input type="text" className="form-control" placeholder="Address 2" />
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Country *</label>
											<select className="custom-select">
											  <option value="1" selected="">India</option>
											  <option value="2">United State</option>
											  <option value="3">United Kingdom</option>
											  <option value="4">China</option>
											  <option value="5">Pakistan</option>
											</select>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">City / Town *</label>
											<input type="text" className="form-control" placeholder="City / Town" />
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">ZIP / Postcode *</label>
											<input type="text" className="form-control" placeholder="Zip / Postcode" />
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Mobile Number *</label>
											<input type="text" className="form-control" placeholder="Mobile Number" />
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Additional Information</label>
											<textarea className="form-control ht-50"></textarea>
										</div>
									</div>
									
								</div>
								
								<div className="row mb-4">
									<div className="col-12 d-block">
										<input id="createaccount" className="checkbox-custom" name="createaccount" type="checkbox" />
										<label htmlFor="createaccount" className="checkbox-custom-label">Create An Account?</label>
									</div>
								</div>
								
								<h5 className="mb-4 ft-medium">Payments</h5>
								<div className="row mb-4">
									<div className="col-12 col-lg-12 col-xl-12 col-md-12">
										<div className="panel-group pay_opy980" id="payaccordion">
									
											{/* <!-- Pay By Paypal --> */}
											<div className="panel panel-default border">
												<div className="panel-heading" id="pay">
													<h4 className="panel-title">
														<a data-toggle="collapse" role="button" data-parent="#payaccordion" href="#payPal" aria-expanded="true" aria-controls="payPal" className="">PayPal<img src="assets/img/paypal.png" className="img-fluid" alt="" /></a>
													</h4>
												</div>
												<div id="payPal" className="panel-collapse collapse show" aria-labelledby="pay" data-parent="#payaccordion">
													<div className="panel-body">
														<div className="form-group">
															<label className="text-dark">PayPal Email</label>
															<input type="text" className="form-control simple" placeholder="paypal@gmail.com" />
														</div>
														<div className="form-group">
															<button type="submit" className="btn btn-dark btm-md full-width">Pay 400.00 USD</button>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Pay By Strip --> */}
											<div className="panel panel-default border">
												<div className="panel-heading" id="stripes">
													<h4 className="panel-title">
														<a data-toggle="collapse" role="button" data-parent="#payaccordion" href="#stripePay" aria-expanded="false" aria-controls="stripePay" className="">Stripe<img src="assets/img/strip.png" className="img-fluid" alt="" /></a>
													</h4>
												</div>
												<div id="stripePay" className="collapse" aria-labelledby="stripes" data-parent="#payaccordion">
													<div className="panel-body">
													
														<div className="row">
															<div className="col-lg-12 col-md-12 col-sm-12">
																<div className="form-group">
																	<label className="text-dark">Card Holder Name *</label>
																	{/* <input type="text" className="form-control" placeholder="Dhananjay Preet" > */}
																</div>
															</div>
															
															<div className="col-lg-12 col-md-12 col-sm-12">
																<div className="form-group">
																	<label className="text-dark">Card Number *</label>
																	{/* <input type="text" className="form-control" placeholder="5426 4586 5485 4759" > */}
																</div>
															</div>									
														
															<div className="col-lg-5 col-md-5 col-sm-6">
																<div className="form-group">
																	<label className="text-dark">Expire Month *</label>
																	<select className="custom-select">
																	  <option value="1" selected="">January</option>
																	  <option value="2">February</option>
																	  <option value="3">March</option>
																	  <option value="4">April</option>
																	  <option value="5">May</option>
																	  <option value="6">June</option>
																	  <option value="7">July</option>
																	  <option value="8">August</option>
																	  <option value="9">September</option>
																	</select>
																</div>
															</div>
															
															<div className="col-lg-5 col-md-5 col-sm-6">
																<div className="form-group">
																	<label className="text-dark">Expire Year *</label>
																	<select className="custom-select">
																	  <option value="1" selected="">2010</option>
																	  <option value="2">2018</option>
																	  <option value="3">2019</option>
																	  <option value="4">2020</option>
																	  <option value="5">2021</option>
																	</select>
																</div>
															</div>
															
															<div className="col-lg-2 col-md-2 col-sm-12">
																<div className="form-group">
																	<label className="text-dark">CVC *</label>
																	<input type="text" className="form-control" placeholder="CVV*" />
																</div>
															</div>										
															
															<div className="col-lg-6 col-md-6 col-sm-12">
																<div className="form-group">
																	<input id="ak-2" className="checkbox-custom" name="ak-2" type="checkbox" />
																	<label htmlFor="ak-2" className="checkbox-custom-label">By Continuing, you ar'e agree to conditions</label>
																</div>
															</div>
															
															<div className="col-lg-12 col-md-12 col-sm-12">
																<div className="form-group text-center">
																	<a href="#" className="btn btn-dark full-width">Pay 202.00 USD</a>
																</div>
															</div>
															
														</div>
														
													</div>
												</div>
											</div>
											
											{/* <!-- Pay By Debit or credtit --> */}
											<div className="panel panel-default border">
												<div className="panel-heading" id="dabit">
													<h4 className="panel-title">
														<a data-toggle="collapse" href="#payaccordion" data-target="#debitPay" aria-expanded="false" aria-controls="debitPay" className="">Debit Or Credit<img src="assets/img/debit.png" className="img-fluid" alt="" /></a>
													</h4>
												</div>
												<div id="debitPay" className="panel-collapse collapse" aria-labelledby="dabit" data-parent="#payaccordion">
													<div className="panel-body">
														<div className="row">
															<div className="col-lg-12 col-md-12 col-sm-12">
																<div className="form-group">
																	<label className="text-dark">Card Holder Name *</label>
																	<input type="text" className="form-control" placeholder="Card Holder Name" />
																</div>
															</div>
															
															<div className="col-lg-12 col-md-12 col-sm-12">
																<div className="form-group">
																	<label className="text-dark">Card Number *</label>
																	<input type="text" className="form-control" placeholder="7589 6356 8547 9120" />
																</div>
															</div>									
														
															<div className="col-lg-5 col-md-5 col-sm-6">
																<div className="form-group">
																	<label className="text-dark">Expire Month *</label>
																	<select className="custom-select">
																	  <option value="1" selected="">January</option>
																	  <option value="2">February</option>
																	  <option value="3">March</option>
																	  <option value="4">April</option>
																	  <option value="5">May</option>
																	  <option value="6">June</option>
																	  <option value="7">July</option>
																	  <option value="8">August</option>
																	  <option value="9">September</option>
																	</select>
																</div>
															</div>
															
															<div className="col-lg-5 col-md-5 col-sm-6">
																<div className="form-group">
																	<label className="text-dark">Expire Year *</label>
																	<select className="custom-select">
																	  <option value="1" selected="">2010</option>
																	  <option value="2">2018</option>
																	  <option value="3">2019</option>
																	  <option value="4">2020</option>
																	  <option value="5">2021</option>
																	</select>
																</div>
															</div>
															
															<div className="col-lg-2 col-md-2 col-sm-12">
																<div className="form-group">
																	<label className="text-dark">CVC *</label>
																	<input type="text" className="form-control" placeholder="CVV*" />
																</div>
															</div>										
															
															<div className="col-lg-6 col-md-6 col-sm-12">
																<div className="form-group">
																	<input id="al-2" className="checkbox-custom" name="al-2" type="checkbox" />
																	<label for="al-2" className="checkbox-custom-label">By Continuing, you ar'e agree to conditions</label>
																</div>
															</div>
															
															<div className="col-lg-12 col-md-12 col-sm-12">
																<div className="form-group text-center">
																	<a href="#" className="btn btn-dark full-width">Pay 202.00 USD</a>
																</div>
															</div>
															
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</form>
						</div>
						
						{/* <!-- Sidebar --> */}
						<div className="col-12 col-lg-4 col-md-12">
							<div className="d-block mb-3">
								<h5 className="mb-4">Order Items (3)</h5>
								<ul className="list-group list-group-sm list-group-flush-y list-group-flush-x mb-4">
									
									<li className="list-group-item">
										<div className="row align-items-center">
											<div className="col-3">
												{/* <!-- Image --> */}
												<a href="product.html"><img src="assets/img/product/7-a.jpg" alt="..." className="img-fluid" /></a>
											</div>
											<div className="col d-flex align-items-center">
												<div className="cart_single_caption pl-2">
													<h4 className="product_title fs-md ft-medium mb-1 lh-1">Women Striped Shirt Dress</h4>
													<p className="mb-1 lh-1"><span className="text-dark">Size: 40</span></p>
													<p className="mb-3 lh-1"><span className="text-dark">Color: Blue</span></p>
													<h4 className="fs-md ft-medium mb-3 lh-1">$129</h4>
												</div>
											</div>
										</div>
									</li>
									
									<li className="list-group-item">
										<div className="row align-items-center">
											<div className="col-3">
												{/* <!-- Image --> */}
												<a href="product.html"><img src="assets/img/product/7.jpg" alt="..." className="img-fluid" /></a>
											</div>
											<div className="col d-flex align-items-center">
												<div className="cart_single_caption pl-2">
													<h4 className="product_title fs-md ft-medium mb-1 lh-1">Girls Solid A-Line Dress</h4>
													<p className="mb-1 lh-1"><span className="text-dark">Size: 36</span></p>
													<p className="mb-3 lh-1"><span className="text-dark">Color: Red</span></p>
													<h4 className="fs-md ft-medium mb-3 lh-1">$129</h4>
												</div>
											</div>
										</div>
									</li>
									
								</ul>
							</div>
							
							<div className="card mb-4 gray">
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
							
							<a className="btn btn-block btn-dark mb-3" href="checkout.html">Place Your Order</a>
						</div>
						
					</div>
					
				</div>
			</section>
    )
}

export default CheckoutDetails
